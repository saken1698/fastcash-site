import React from "react";
import { usePostData } from "../../hooks/usePostData";
import classes from "./CashSelector.module.css";

export function CashSelector({
  credit,
  part,
  setCredit,
  closest,
  setData2,
  period,
  setCreditPeriod,
}) {
  const { postData } = usePostData();
  return (
    <div className={classes.loan_sum}>
      <p className={classes.loan_title}>Сумма займа, тнг</p>
      <div className={classes.zipper}>
        <span className={classes.zipper_value}></span>
        <input
          type="range"
          className={classes.range}
          name="cash"
          min={credit.cashLimits[0]}
          max={credit.cashLimits[1]}
          step={2500}
          onMouseUp={(evt) => {
            postData(part, credit.cash, period.roundedValue, setData2);
          }}
          onChange={(evt) => {
            setCredit((prev) => ({
              ...prev,
              cash: evt.target.value,
            }));
            setCreditPeriod((prev) => ({
              ...prev,
              roundedValue: closest,
            }));
          }}
        ></input>
        <span
          className={classes.zipper_text}
          style={{
            left:
              credit.cash != 5000
                ? `calc(${
                    ((credit.cash - credit.cashLimits[0]) * 100) /
                    (credit.cashLimits[1] - credit.cashLimits[0])
                  }% + ${
                    1 -
                    (((credit.cash - credit.cashLimits[0]) * 100) /
                      (credit.cashLimits[1] - credit.cashLimits[0])) *
                      0.3
                  }px)`
                : `-1%`,
          }}
        >
          {credit.cash}
        </span>
      </div>
    </div>
  );
}
