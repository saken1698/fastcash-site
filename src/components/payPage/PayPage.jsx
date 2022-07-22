import React from "react";
import classes from "./PayPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GettingStatus from "../gettingStatus/GettingStatus";
import { Form } from "../form/Form";
import { Calculator } from "../calculator/Calculator";
import { SmsModal } from "../smsModal/SmsModal";
import { Checkboxes } from "../checkboxes/Checkboxes";
import { prod } from "./constants";
import { useValidation } from "../../hooks/useValidation";

function PayPage() {
  const { values, errors, handleBlur, handleChange } = useValidation();

  const [cash, setCash] = useState(5000);
  const [period, setPeriod] = useState(1);
  const [minPeriod, setMinPeriod] = useState(3);
  const [maxPeriod, setMaxPeriod] = useState(3);
  const [periods, setPeriods] = useState([3]);
  const [cashLimits, setCashLimits] = useState([5000, 100000]);
  const [roundedValue, setRoundedValue] = useState(0);

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [checkbox1, setCheckbox1] = useState("false");
  const [checkbox2, setCheckbox2] = useState("false");

  const [modalState, setModalState] = useState(true);
  function switchModal(state) {
    setModalState(state);
  }

  function changePeriod(name) {
    data.forEach((item) => {
      if (item.name === name) {
        setMinPeriod(item.products[0].period);
        setMaxPeriod(item.products[item.products.length - 1].period);
        let month = [];
        item.products.forEach((el) => {
          month.push(el.period);
        });
        setPeriods(month);
      }
    });
  }

  function checkSmsCode() {
    if (
      !errors.number1 &&
      !errors.number2 &&
      !errors.number3 &&
      !errors.number4
    ) {
      return true;
    } else {
      return false;
    }
  }

  const changeUIN = (e) => {
    if (e.currentTarget.value.length < 13) {
      handleChange(e);
    }
  };

  const changeDocumentNumber = (e) => {
    if (e.target.value.length < 10) {
      handleChange(e);
    }
  };

  function checkErrors() {
    if (!errors.phone && !errors.uin && !errors.documentNumber) {
      if (values.toggle === true && values.toggle2 === true) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  const [state, setState] = useState(false);
  function changeState(state) {
    setState((current) => !current);
  }

  const [state2, setState2] = useState(false);
  function changeState2() {
    setState2((current) => !current);
  }

  const [product, setProduct] = useState("Выберите продукт");
  function changeProduct(product) {
    setProduct(product);
  }

  const [partner, setPartner] = useState("Выберите партнера");
  const [partnerId, setPartnerId] = useState("");
  function changePartner(partner, id) {
    setPartner(partner);
    setPartnerId(id);
  }

  function getData(product) {
    axios
      .get(
        `https://fastcash-back.trafficwave.kz/apply-landing/products?product=${product}`
      )
      .then((response) => {
        setData(response.data.results);
        let item = response.data.results[0];
        if (response.data.results.length === 1) {
          changePartner(item.name, item.id);
          changePeriod(item.name);
          setMinPeriod(item.products[0].period);
          setMaxPeriod(item.products[item.products.length - 1].period);
          let month = [];
          item.products.forEach((el) => {
            month.push(el.period);
          });
          setPeriods(month);
        }
      });
  }

  function postData(partner, cash, period) {
    axios
      .post("https://fastcash-back.trafficwave.kz/apply-landing/schedule", {
        partner: partner,
        principal: cash,
        period: period,
      })
      .then((response) => {
        setData2(response.data);
      });
  }

  return (
    <section className={classes.section}>
      <div className={classes.calc_container}>
        <div className={classes.calc_text}>
          <p className={classes.title}>Узнайте решение за 4 секунды</p>
          <p className={classes.text}>
            Freedom Finance Credit позволяет узнать доступную вам сумму займа в
            режиме онлайн 24/7.
          </p>
        </div>
        <div className={classes.calc}>
          <h3 className={classes.calc_title}>Заполните заявку</h3>
          <div
            className={classes.selection}
            onClick={() => {
              changeState(state);
            }}
          >
            <p сlassName={classes.selection_text}>{product}</p>
            <svg
              className={classes.arrow}
              viewBox="0 0 36 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: state ? "rotate(0deg)" : "",
              }}
            >
              <path
                d="M34.3043 17.6548C33.2646 18.5008 31.7738 18.5008 30.7341 17.6548L18 7.29243L5.26593 17.6548C4.22623 18.5008 2.73543 18.5008 1.69574 17.6548C0.304932 16.523 0.304932 14.3992 1.69574 13.2675L18 -0.00013899L34.3043 13.2675C35.6951 14.3992 35.6951 16.523 34.3043 17.6548Z"
                fill="#3D803D"
              ></path>
            </svg>
            <ul
              className={classes.menu_list}
              style={{
                display: state ? "block" : "none",
                opacity: state ? "1" : "0",
              }}
            >
              {prod.map((item) => {
                return (
                  <li
                    className={classes.row}
                    onClick={() => {
                      changeProduct(item.name);
                      getData(item.key);
                      changePartner("Выберите партнера");
                      setCashLimits([5000, 10000]);
                      setCash(5000);
                      setPeriod(3);
                      setMaxPeriod(3);
                      setMinPeriod(3);
                      setRoundedValue(3);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <p
            className={classes.calc_tip}
            style={{
              display: product === "Авиабилет" ? "block" : "none",
            }}
          >
            Онлайн-сервис для бронирования и покупки наиболее дешевых
            авиабилетов в Казахстане и за его пределами.
          </p>
          <p
            className={classes.calc_tip}
            style={{
              display: product === "Товарный кредит" ? "block" : "none",
            }}
          >
            Вы выбрали товарный кредит
          </p>
          <div
            className={classes.selection}
            onClick={() => {
              changeState2();
            }}
            style={{
              display:
                product === "Выберите продукт"
                  ? "none"
                  : product === "Страховой полис ОГПО"
                  ? "none"
                  : "flex",
            }}
          >
            <p сlassName={classes.selection_text}>{partner}</p>
            <svg
              className={classes.arrow}
              viewBox="0 0 36 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: state2 ? "rotate(0deg)" : "",
              }}
            >
              <path
                d="M34.3043 17.6548C33.2646 18.5008 31.7738 18.5008 30.7341 17.6548L18 7.29243L5.26593 17.6548C4.22623 18.5008 2.73543 18.5008 1.69574 17.6548C0.304932 16.523 0.304932 14.3992 1.69574 13.2675L18 -0.00013899L34.3043 13.2675C35.6951 14.3992 35.6951 16.523 34.3043 17.6548Z"
                fill="#3D803D"
              ></path>
            </svg>
            <ul
              className={classes.menu_second_list}
              style={{
                display: state2 ? "block" : "none",
              }}
            >
              {data.map((item) => {
                return (
                  <li
                    className={classes.row}
                    onClick={() => {
                      changePartner(item.name, item.id);
                      changePeriod(item.name);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <Calculator
            data={data}
            data2={data2}
            postData={postData}
            states={[
              periods,
              period,
              cash,
              cashLimits,
              roundedValue,
              minPeriod,
              maxPeriod,
              partner,
              partnerId,
            ]}
            setCashLimits={setCashLimits}
            setRoundedValue={setRoundedValue}
            setPeriod={setPeriod}
            setCash={setCash}
          />
          <Form
            handleChange={handleChange}
            values={[values.phone, values.uin, values.documentNumber]}
            changeUIN={changeUIN}
            changeDocumentNumber={changeDocumentNumber}
          />
          <Checkboxes
            handleChange={handleChange}
            setCheckbox1={setCheckbox1}
            setCheckbox2={setCheckbox2}
          />
          <button
            className={classes.button}
            disabled={checkErrors()}
            onClick={() => {
              switchModal(true);
            }}
          >
            Отправить заявку
          </button>
        </div>
      </div>
      <GettingStatus />
      <SmsModal
        values={[
          values.number1,
          values.number2,
          values.number3,
          values.number4,
        ]}
        handleChange={handleChange}
        modalState={modalState}
        switchModal={switchModal}
      />
    </section>
  );
}

export default PayPage;
