import React from "react";
import NumberFormat from "react-number-format";
import classes from "./From.module.css";

function Form({ handleChange, changeUIN, changeDocumentNumber, values }) {
  const [phone, uin, document] = values;

  return (
    <div className={classes.form}>
      <p className={classes.loan_title}>
        Заполните форму для того чтобы узнать статус одобрения
      </p>
      <p className={(classes.loan_title, classes.title_regular)}>
        Укажите номер, который принадлежит Вам, активен и был в пользовании
        последние три месяца
      </p>
      <div className={classes.inputs}>
        <div className={classes.input_part}>
          <label className={classes.label}>Телефон</label>
          <NumberFormat
            className={classes.input}
            mask="_"
            format="+7 ### ### ## ##"
            name="phone"
            onChange={handleChange}
            value={phone}
            allowEmptyFormatting
          />
        </div>
        <div className={classes.input_part}>
          <label className={classes.label}>ИИН</label>
          <NumberFormat
            className={classes.input}
            format="############"
            mask="_"
            onChange={changeUIN}
            value={uin}
            name="uin"
          />
        </div>
        <div className={classes.input_part}>
          <label className={classes.label}>№ удостоверения личности</label>
          <NumberFormat
            className={classes.input}
            onChange={changeDocumentNumber}
            value={document}
            name="documentNumber"
            format="#########"
            mask="_"
          />
        </div>
      </div>
    </div>
  );
}

export { Form };
