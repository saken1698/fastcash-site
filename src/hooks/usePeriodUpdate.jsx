import React from "react";

export function usePeriodUpdate() {
  function changePeriod(data, name, setCreditPeriod) {
    data.forEach((item) => {
      if (item.name === name) {
        let month = [];
        item.products.forEach((el) => {
          month.push(el.period);
        });
        setCreditPeriod((prev) => ({
          ...prev,
          min: item.products[0].period,
          max: item.products[item.products.length - 1].period,
          periods: month,
        }));
        return {
          min: item.products[0].period,
          max: item.products[item.products.length - 1].period,
          periods: month,
        };
      }
    });
  }
  return { changePeriod };
}
