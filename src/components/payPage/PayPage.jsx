import React from "react";
import classes from "./PayPage.module.css";
import { useState, useEffect } from "react";
import GettingStatus from "../gettingStatus/GettingStatus";
import { SmsModal } from "../smsModal/SmsModal";
import { useValidation } from "../../hooks/useValidation";
import { PayPageCounter } from "../payPageCounter/PayPageCounter";

function PayPage() {
  const { values, errors, handleBlur, handleChange } = useValidation();

  const [cash, setCash] = useState(5000);
  const [period, setPeriod] = useState(1);

  const [data2, setData2] = useState([]);

  const [modalState, setModalState] = useState(false);
  const [timer1, setTimer1] = React.useState(20);

  const [partnerId, setPartnerId] = useState("");

  return (
    <section className={classes.section}>
      <PayPageCounter
        validation={[values, errors]}
        states={[data2, period, cash, partnerId]}
        handleChange={handleChange}
        setPartnerId={setPartnerId}
        setData2={setData2}
        setPeriod={setPeriod}
        setCash={setCash}
        setTimer={setTimer1}
        setModalState={setModalState}
      />

      <GettingStatus />
      <SmsModal
        modalState={modalState}
        switchModal={setModalState}
        timer={timer1}
        setTimer={setTimer1}
        data={[
          cash,
          period,
          partnerId,
          data2,
          values.uin,
          values.documentNumber,
          values.phone,
        ]}
      />
    </section>
  );
}

export default PayPage;
