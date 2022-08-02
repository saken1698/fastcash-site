import React from "react";
import classes from "./PayPage.module.css";
import { useState, useEffect } from "react";
import GettingStatus from "../gettingStatus/GettingStatus";
import { SmsModal } from "../smsModal/SmsModal";
import { useValidation } from "../../hooks/useValidation";
import { PayPageCounter } from "../payPageCounter/PayPageCounter";

function PayPage() {
  const { values, errors, handleChange } = useValidation();

  const [credit, setCredit] = useState({
    cash: 5000,
    cashLimits: [5000, 10000],
  });

  const [creditPeriod, setCreditPeriod] = useState({
    min: 3,
    max: 3,
    current: 3,
    periods: [1],
    roundedValue: 0,
  });

  const [data2, setData2] = useState([]);

  const [modalState, setModalState] = useState(false);
  const [timer1, setTimer1] = React.useState(20);

  const [part, setPart] = useState({ partner: "Выберите партнера", id: "" });

  return (
    <section className={classes.section}>
      <PayPageCounter
        validation={[values, errors]}
        states={[data2, creditPeriod, credit, part]}
        handleChange={handleChange}
        setPart={setPart}
        setData2={setData2}
        setCreditPeriod={setCreditPeriod}
        setCredit={setCredit}
        setTimer={setTimer1}
        setModalState={setModalState}
      />
      <GettingStatus />
      <SmsModal
        modalState={modalState}
        switchModal={setModalState}
        timer={timer1}
        setTimer={setTimer1}
        data={[credit, creditPeriod, part.id, data2, values]}
      />
    </section>
  );
}

export default PayPage;
