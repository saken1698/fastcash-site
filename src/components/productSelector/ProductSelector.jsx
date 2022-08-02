import React, { useEffect } from "react";
import classes from "./ProductSelector.module.css";
import { prod } from "../payPage/constants";
import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { usePeriodUpdate } from "../../hooks/usePeriodUpdate";

export function ProductSelector({
  setData,
  product,
  setCredit,
  setProduct,
  setPart,
  setCreditPeriod,
  data,
}) {
  const [state, setState] = useState();
  const { getData } = useGetData();
  const { changePeriod } = usePeriodUpdate();

  useEffect(() => {
    function checkDataLength() {
      if (data.length === 1) {
        let item = data[0];
        setPart({ partner: `${item.name}`, id: `${item.id}` });
        changePeriod(data, item.name, setCreditPeriod);
        setCredit((prev) => ({
          ...prev,
          cashLimits: [
            item.products[0].principal_min,
            item.products[0].principal_max,
          ],
        }));
      }
    }
    checkDataLength();
  }, [data]);

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
              key={item.name}
              className={classes.row}
              onClick={() => {
                setProduct(item.name);
                getData(item.key, setData, setPart);
                setPart({ partner: "Выберите партнера", id: "" });
                setCredit((prev) => ({
                  ...prev,
                  cahs: 5000,
                  cashLimit: [5000, 10000],
                }));
                setCreditPeriod((prev) => ({
                  ...prev,
                  min: 3,
                  max: 3,
                  current: 3,
                  setRoundedValue: 3,
                }));
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
