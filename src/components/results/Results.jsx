import React from "react";
import classes from "./Results.module.css";

export function Results({ data, state, setState }) {
  return (
    <div className={classes.calculation_info}>
      <p className={classes.loan_title}>Результат расчета</p>
      <div className={classes.results}>
        <div className={classes.result}>
          <p className={classes.result_text}>Вид займа</p>
          <p className={classes.result_text}>Ежемесячный платеж</p>
        </div>
        <div className={classes.result}>
          <p className={(classes.result_text, classes.red)}>
            {data.interest_rate === 0 ? "Рассрочка" : "Кредит"}
          </p>
          <p className={classes.result_text}>{data.monthly_payment} ₸</p>
        </div>
      </div>
      <div className={classes.results}>
        <div className={classes.result}>
          <p className={classes.result_text}>Ставка</p>
          <p className={classes.result_text}>Тип погашения</p>
        </div>
        <div className={classes.result}>
          <p className={classes.result_text}>
            {data.interest_rate}% (*ГЭСВ {data.effective_rate}%)
          </p>
          <div className={classes.hint}>
            <p className={classes.result_text}>Аннуитетный платёж </p>
            <svg
              className={classes.svg_icon}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              onClick={() => {
                setState((current) => !current);
              }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
            <div
              className={classes.hint_hover}
              style={{ opacity: state ? "1" : "0" }}
            >
              <p className={classes.hint_hoverText}>Платежи равными суммами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
