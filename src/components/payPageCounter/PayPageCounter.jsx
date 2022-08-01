import React from "react";
import classes from "./PayPageCounter.module.css";
import { useState } from "react";
import axios from "axios";
import { CreditSelector } from "../creditSelector/CreditSelector";

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
  setPart,
}) {
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
          setPart({ partner: `${item.name}`, id: `${item.id}` });
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
      <CreditSelector
        states={states}
        info={[
          product,
          data,
          partner,
          periods,
          validation,
          minPeriod,
          maxPeriod,
        ]}
        handleChange={handleChange}
        getData={getData}
        changePeriod={changePeriod}
        setPeriod={setPeriod}
        setCash={setCash}
        setProduct={setProduct}
        setPartner={setPartner}
        setMaxPeriod={setMaxPeriod}
        setMinPeriod={setMinPeriod}
        setPartnerId={setPartnerId}
        postData={postData}
        setTimer={setTimer}
        setModalState={setModalState}
      />
    </div>
  );
}
