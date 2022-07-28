import React from "react";
import classes from "./SmsModalInputs.module.css";
import { useRef } from "react";

export function SmsModalInputs({ values, handleBlur, handleChange }) {
  const number = useRef(null);
  const number2 = useRef(null);
  const number3 = useRef(null);
  const number4 = useRef(null);

  function changeFocus(ref, value) {
    if (value.length === 1) {
      ref.current.focus();
    }
  }
  return (
    <div className={classes.modal_inputs}>
      <input
        className={classes.modal_input}
        ref={number}
        name="number1"
        value={values.number1}
        onKeyUp={() => {
          changeFocus(number2, values.number1);
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={1}
      />
      <input
        className={classes.modal_input}
        ref={number2}
        onKeyUp={() => {
          changeFocus(number3, values.number2);
        }}
        name="number2"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.number2}
        maxLength={1}
      />
      <input
        className={classes.modal_input}
        ref={number3}
        onKeyUp={() => {
          changeFocus(number4, values.number3);
        }}
        name="number3"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.number3}
        maxLength={1}
      />
      <input
        className={classes.modal_input}
        ref={number4}
        name="number4"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.number4}
        maxLength={1}
      />
    </div>
  );
}
