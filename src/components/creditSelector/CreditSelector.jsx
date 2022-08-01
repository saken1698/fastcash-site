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
  getData,
  changePeriod,
  setPeriod,
  setCash,
  setProduct,
  setPartner,
  setMaxPeriod,
  setMinPeriod,
  setPartnerId,
  postData,
  setModalState,
  setTimer,
}) {
  const [data2, period, cash, partnerId] = states;
  const [product, data, partner, periods, validation, minPeriod, maxPeriod] =
    info;
  const [values, errors] = validation;

  const [cashLimits, setCashLimits] = useState([5000, 100000]);
  const [roundedValue, setRoundedValue] = useState(0);
  const checked = useCheckingSms(errors, values);
  const { postCredit } = useCreditPost();

  return (
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
      />
      <Checkboxes handleChange={handleChange} />
      <button
        className={classes.button}
        disabled={checked}
        onClick={() => {
          setModalState(true);
          setTimer(60);
          postCredit(
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
  );
}
