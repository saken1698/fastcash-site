import React from "react";
import classes from "./PayPageCounter.module.css";
import { ProductSelector } from "../productSelector/ProductSelector";
import { PartnerSelector } from "../partnerSelector/PartnerSelector";
import { PostCredit } from "../../hooks/postCredit";
import { Checkboxes } from "../checkboxes/Checkboxes";
import { Form } from "../form/Form";
import { Calculator } from "../calculator/Calculator";
import { useState } from "react";
import axios from "axios";
import { useCheckingSms } from "../../hooks/useCheckingSms";
import { usePostCredit } from "../../hooks/postCredit";

export function PayPageCounter({
  validation,
  states,
  handleChange,
  setPartnerId,
  setData2,
  setPeriod,
  setCash,
  setTimer,
  setModalState,
}) {
  const [values, errors] = validation;
  const [data2, period, cash, partnerId] = states;

  const [cashLimits, setCashLimits] = useState([5000, 100000]);
  const [roundedValue, setRoundedValue] = useState(0);

  const [minPeriod, setMinPeriod] = useState(3);
  const [maxPeriod, setMaxPeriod] = useState(3);
  const [periods, setPeriods] = useState([3]);
  const [data, setData] = useState([]);

  const [partner, setPartner] = useState("Выберите партнера");
  const [product, setProduct] = useState("Выберите продукт");

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

  const checked = useCheckingSms(errors, values);

  function getData(product) {
    axios
      .get(
        `https://fastcash-back.trafficwave.kz/apply-landing/products?product=${product}`
      )
      .then((response) => {
        setData(response.data.results);
        let item = response.data.results[0];
        if (response.data.results.length === 1) {
          setPartner(item.name);
          setPartnerId(item.id);
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
        <ProductSelector
          getData={getData}
          product={product}
          setPeriod={setPeriod}
          setCash={setCash}
          setProduct={setProduct}
          setPartner={setPartner}
          setCashLimits={setCashLimits}
          setMaxPeriod={setMaxPeriod}
          setMinPeriod={setMinPeriod}
          setRoundedValue={setRoundedValue}
        />
        <p
          className={classes.calc_tip}
          style={{
            display: product === "Авиабилет" ? "block" : "none",
          }}
        >
          Онлайн-сервис для бронирования и покупки наиболее дешевых авиабилетов
          в Казахстане и за его пределами.
        </p>
        <p
          className={classes.calc_tip}
          style={{
            display: product === "Товарный кредит" ? "block" : "none",
          }}
        >
          Вы выбрали товарный кредит
        </p>
        <PartnerSelector
          states={[product, partner, data]}
          changePeriod={changePeriod}
          setPartner={setPartner}
          setPartnerId={setPartnerId}
        />
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
        <Checkboxes handleChange={handleChange} />
        <button
          className={classes.button}
          disabled={checked}
          onClick={() => {
            setModalState(true);
            setTimer(60);
            PostCredit(
              cash,
              period,
              partnerId,
              data2.product,
              data2.repayment_method.id,
              values.uin,
              values.documentNumber,
              values.phone
            );
          }}
        >
          Отправить заявку
        </button>
      </div>
    </div>
  );
}
