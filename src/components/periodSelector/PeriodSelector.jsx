import React from "react";
import classes from "./PeriodSelector.module.css";

export function PeriodSelector({
  values,
  setPeriod,
  setRoundedValue,
  changeCashLimits,
  postData,
}) {
  const [period, maxPeriod, minPeriod, roundedValue, closest, partnerId, cash] =
    values;

  return (
    <div className={classes.loan_sum}>
      <p className={classes.loan_title}>Срок, мес</p>
      <div className={classes.zipper}>
        <span
          className={classes.zipper_text}
          style={{
            left:
              period != minPeriod
                ? `calc(${
                    ((roundedValue - minPeriod) * 100) / (maxPeriod - minPeriod)
                  }% + ${
                    5 -
                    (((roundedValue - minPeriod) * 100) /
                      (maxPeriod - minPeriod)) *
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
            setPeriod(evt.currentTarget.value);
            setRoundedValue(closest);
            changeCashLimits();
          }}
          onMouseUp={(evt) => {
            postData(partnerId, cash, roundedValue);
          }}
          value={closest}
          min={minPeriod}
          max={maxPeriod}
          list="tickmarks"
        />
      </div>
    </div>
  );
}
