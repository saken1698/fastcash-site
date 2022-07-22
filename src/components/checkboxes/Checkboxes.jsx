import React from "react";
import classes from "./Checkboxes.module.css";

export function Checkboxes({ handleChange, setCheckbox1, setCheckbox2 }) {
  return (
    <div className={classes.checkboxes}>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
          name="toggle"
          onChange={handleChange}
          className={classes.check}
          onClick={() => {
            setCheckbox1((current) => !current);
            // handleChange();
          }}
        />
        <label className={classes.term}>
          Я соглашаюсь на сбор и обработку моих персональных данных
        </label>
      </div>
      <div className={classes.checkbox}>
        <input
          type="checkbox"
          name="toggle2"
          onChange={handleChange}
          className={classes.check}
          onClick={() => {
            setCheckbox2((current) => !current);
          }}
        ></input>
        <label className={classes.term}>
          Я соглашаюсь на предоставление информации и получение отчета из
          Кредитного Бюро, ГЦВП
        </label>
      </div>
    </div>
  );
}