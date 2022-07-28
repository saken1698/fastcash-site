import React from "react";
import classes from "./Calculator.module.css";
import { useState } from "react";
import { Results } from "../results/Results";
import { CashSelector } from "../cashSelector/CashSelector";
import { PeriodSelector } from "../periodSelector/PeriodSelector";

function Calculator({
  data,
  data2,
  postData,
  states,
  setCash,
  setCashLimits,
  setPeriod,
  setRoundedValue,
}) {
  const [
    periods,
    period,
    cash,
    cashLimits,
    roundedValue,
    minPeriod,
    maxPeriod,
    partner,
    partnerId,
  ] = states;

  const closest = periods.reduce(function (prev, curr) {
    return Math.abs(curr - period) < Math.abs(prev - period) ? curr : prev;
  });

  const [state, setState] = useState(false);

  function changeCashLimits() {
    data.forEach((el) => {
      if (el.name === partner) {
        let cashArray = [];
        el.products.forEach((item) => {
          if (item.period === roundedValue) {
            cashArray.push(item.principal_min);
            cashArray.push(item.principal_max);
          }
          setCashLimits(cashArray);
        });
      }
    });
  }

  return (
    <div className={classes.calculation}>
      <div className={classes.calculation_container}>
        <CashSelector
          cashLimits={cashLimits}
          cash={cash}
          roundedValue={roundedValue}
          partnerId={partnerId}
          setCash={setCash}
          closest={closest}
          setRoundedValue={setRoundedValue}
          postData={postData}
        />
        <PeriodSelector
          values={[
            period,
            maxPeriod,
            minPeriod,
            roundedValue,
            closest,
            partnerId,
            cash,
          ]}
          setPeriod={setPeriod}
          setRoundedValue={setRoundedValue}
          changeCashLimits={changeCashLimits}
          postData={postData}
        />
      </div>
      <Results data={data2} state={state} setState={setState} />
    </div>
  );
}

export { Calculator };
