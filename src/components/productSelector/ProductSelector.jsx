import React from "react";
import classes from "./ProductSelector.module.css";
import { prod } from "../payPage/constants";
import { useState } from "react";

export function ProductSelector({
  getData,
  product,
  setPeriod,
  setCash,
  setProduct,
  setPartner,
  setCashLimits,
  setMaxPeriod,
  setMinPeriod,
  setRoundedValue,
}) {
  const [state, setState] = useState();
  return (
    <div
      className={classes.selection}
      onClick={() => {
        setState((current) => !current);
      }}
    >
      <p сlassName={classes.selection_text}>{product}</p>
      <svg
        className={classes.arrow}
        viewBox="0 0 36 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: state ? "rotate(0deg)" : "",
        }}
      >
        <path
          d="M34.3043 17.6548C33.2646 18.5008 31.7738 18.5008 30.7341 17.6548L18 7.29243L5.26593 17.6548C4.22623 18.5008 2.73543 18.5008 1.69574 17.6548C0.304932 16.523 0.304932 14.3992 1.69574 13.2675L18 -0.00013899L34.3043 13.2675C35.6951 14.3992 35.6951 16.523 34.3043 17.6548Z"
          fill="#3D803D"
        ></path>
      </svg>
      <ul
        className={classes.menu_list}
        style={{
          display: state ? "block" : "none",
          opacity: state ? "1" : "0",
        }}
      >
        {prod.map((item) => {
          return (
            <li
              className={classes.row}
              onClick={() => {
                setProduct(item.name);
                getData(item.key);
                setPartner("Выберите партнера");
                setCashLimits([5000, 10000]);
                setCash(5000);
                setPeriod(3);
                setMaxPeriod(3);
                setMinPeriod(3);
                setRoundedValue(3);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
