import React from "react";
import classes from "./CreditSelector.module.css";
import { ProductSelector } from "../productSelector/ProductSelector";
import { PartnerSelector } from "../partnerSelector/PartnerSelector";
import { Form } from "../form/Form";
import { Calculator } from "../calculator/Calculator";
import { Checkboxes } from "../checkboxes/Checkboxes";
import { useState } from "react";
import { useCheckingSms } from "../../hooks/useCheckingSms";
import { useCreditPost } from "../../hooks/useCreditPost";

export function CreditSelector({
  states,
  info,
  handleChange,
  setCredit,
  setProduct,
  setData2,
  setModalState,
  setTimer,
  setPart,
  setCreditPeriod,
  setData,
}) {
  const [data2, period, credit, part] = states;
  const [product, data, validation] = info;
  const [values, errors] = validation;
  const checked = useCheckingSms(errors, values);
  const { postCredit } = useCreditPost();

  return (
    <div className={classes.calc}>
      <h3 className={classes.calc_title}>Заполните заявку</h3>
      <ProductSelector
        setData={setData}
        product={product}
        setCredit={setCredit}
        setProduct={setProduct}
        setPart={setPart}
        setCreditPeriod={setCreditPeriod}
        data={data}
      />
      <p
        className={classes.calc_tip}
        style={{
          display: product === "Авиабилет" ? "block" : "none",
        }}
      >
        Онлайн-сервис для бронирования и покупки наиболее дешевых авиабилетов в
        Казахстане и за его пределами.
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
        states={[product, part, data]}
        setPart={setPart}
        setCreditPeriod={setCreditPeriod}
      />
      <Calculator
        data={data}
        data2={data2}
        setData2={setData2}
        states={[period, credit, part]}
        setCreditPeriod={setCreditPeriod}
        setCredit={setCredit}
      />
      <Form
        handleChange={handleChange}
        values={[values.phone, values.uin, values.documentNumber]}
      />
      <Checkboxes handleChange={handleChange} />
      <button
        className={classes.button}
        disabled={checked}
        onClick={() => {
          setModalState(true);
          setTimer(60);
          postCredit(credit.cash, period.roundedValue, part.id, data, values);
        }}
      >
        Отправить заявку
      </button>
    </div>
  );
}
