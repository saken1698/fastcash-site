import React from "react";
import classes from "./Calculator.module.css";
import { useState } from "react";
import { Results } from "../results/Results";
import { CashSelector } from "../cashSelector/CashSelector";
import { PeriodSelector } from "../periodSelector/PeriodSelector";

function Calculator({
  data,
  data2,
  setData2,
  states,
  setCredit,
  setCreditPeriod,
}) {
  const [period, credit, part] = states;

  const closest = period.periods.reduce(function (prev, curr) {
    return Math.abs(curr - period.current) < Math.abs(prev - period.current)
      ? curr
      : prev;
  });

  const [state, setState] = useState(false);

  function changeCashLimits() {
    data.forEach((el) => {
      if (el.name === part.partner) {
        let cashArray = [];
        el.products.forEach((item) => {
          if (item.period === period.roundedValue) {
            cashArray.push(item.principal_min);
            cashArray.push(item.principal_max);
          }
          setCredit((prev) => ({
            ...prev,
            cashLimits: cashArray,
          }));
        });
      }
    });
  }

  return (
    <div className={classes.calculation}>
      <div className={classes.calculation_container}>
        <CashSelector
          credit={credit}
          setCredit={setCredit}
          part={part.id}
          closest={closest}
          setData2={setData2}
          setCreditPeriod={setCreditPeriod}
          period={period}
        />
        <PeriodSelector
          values={[period, closest, part.id, credit]}
          setCreditPeriod={setCreditPeriod}
          changeCashLimits={changeCashLimits}
          setData2={setData2}
        />
      </div>
      <Results data={data2} state={state} setState={setState} />
    </div>
  );
}

export { Calculator };
