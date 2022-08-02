import React from "react";
import classes from "./PayPageCounter.module.css";
import { useState } from "react";
import { CreditSelector } from "../creditSelector/CreditSelector";

export function PayPageCounter({
  validation,
  states,
  handleChange,
  setData2,
  setCredit,
  setTimer,
  setModalState,
  setPart,
  setCreditPeriod,
}) {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("Выберите продукт");

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
        info={[product, data, validation]}
        handleChange={handleChange}
        setCredit={setCredit}
        setProduct={setProduct}
        setPart={setPart}
        setData2={setData2}
        setTimer={setTimer}
        setModalState={setModalState}
        setCreditPeriod={setCreditPeriod}
        setData={setData}
      />
    </div>
  );
}
