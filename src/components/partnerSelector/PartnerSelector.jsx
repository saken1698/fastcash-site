import React from "react";
import classes from "./PartnerSelector.module.css";

export function PartnerSelector({
  states,
  changePeriod,
  setState2,
  setPartner,
  setPartnerId,
}) {
  const [product, partner, data, state2] = states;
  return (
    <div
      className={classes.selection}
      onClick={() => {
        setState2((current) => !current);
      }}
      style={{
        display:
          product === "Выберите продукт"
            ? "none"
            : product === "Страховой полис ОГПО"
            ? "none"
            : "flex",
      }}
    >
      <p сlassName={classes.selection_text}>{partner}</p>
      <svg
        className={classes.arrow}
        viewBox="0 0 36 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: state2 ? "rotate(0deg)" : "",
        }}
      >
        <path
          d="M34.3043 17.6548C33.2646 18.5008 31.7738 18.5008 30.7341 17.6548L18 7.29243L5.26593 17.6548C4.22623 18.5008 2.73543 18.5008 1.69574 17.6548C0.304932 16.523 0.304932 14.3992 1.69574 13.2675L18 -0.00013899L34.3043 13.2675C35.6951 14.3992 35.6951 16.523 34.3043 17.6548Z"
          fill="#3D803D"
        ></path>
      </svg>
      <ul
        className={classes.menu_second_list}
        style={{
          display: state2 ? "block" : "none",
        }}
      >
        {data.map((item) => {
          return (
            <li
              className={classes.row}
              onClick={() => {
                setPartner(item.name);
                setPartnerId(item.id);
                changePeriod(item.name);
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
