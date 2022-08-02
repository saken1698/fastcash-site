import React from "react";
import { usePostData } from "../../hooks/usePostData";
import classes from "./PeriodSelector.module.css";

export function PeriodSelector({
  values,
  setCreditPeriod,
  changeCashLimits,
  setData2,
}) {
  const [period, closest, partnerId, credit] = values;
  const { postData } = usePostData();

  return (
    <div className={classes.loan_sum}>
      <p className={classes.loan_title}>Срок, мес</p>
      <div className={classes.zipper}>
        <span
          className={classes.zipper_text}
          style={{
            left:
              period.current != period.min
                ? `calc(${
                    ((period.roundedValue - period.min) * 100) /
                    (period.max - period.min)
                  }% + ${
                    5 -
                    (((period.roundedValue - period.min) * 100) /
                      (period.max - period.min)) *
                      0.2
                  }px)`
                : `${5}%`,
            top: "-5px",
          }}
        >
          {closest}
        </span>
        <input
          type="range"
          className={classes.range}
          name="period"
          onChange={(evt) => {
            setCreditPeriod((prev) => ({
              ...prev,
              current: evt.target.value,
              roundedValue: closest,
            }));
            changeCashLimits();
          }}
          onMouseUp={(evt) => {
            postData(partnerId, credit.cash, period.roundedValue, setData2);
          }}
          value={closest}
          min={period.min}
          max={period.max}
        />
      </div>
    </div>
  );
}
