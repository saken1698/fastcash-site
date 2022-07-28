import React from "react";
import classes from "./CashSelector.module.css";

export function CashSelector({
  cashLimits,
  cash,
  roundedValue,
  partnerId,
  setCash,
  closest,
  setRoundedValue,
  postData,
}) {
  return (
    <div className={classes.loan_sum}>
      <p className={classes.loan_title}>Сумма займа, тнг</p>
      <div className={classes.zipper}>
        <span className={classes.zipper_value}></span>
        <input
          type="range"
          className={classes.range}
          name="cash"
          min={cashLimits[0]}
          max={cashLimits[1]}
          step={2500}
          onMouseUp={(evt) => {
            postData(partnerId, cash, roundedValue);
          }}
          onChange={(evt) => {
            setCash(evt.currentTarget.value);
            setRoundedValue(closest);
          }}
        ></input>
        <span
          className={classes.zipper_text}
          style={{
            left:
              cash != 5000
                ? `calc(${
                    ((cash - cashLimits[0]) * 100) /
                    (cashLimits[1] - cashLimits[0])
                  }% + ${
                    1 -
                    (((cash - cashLimits[0]) * 100) /
                      (cashLimits[1] - cashLimits[0])) *
                      0.3
                  }px)`
                : `-1%`,
          }}
        >
          {cash}
        </span>
      </div>
    </div>
  );
}
