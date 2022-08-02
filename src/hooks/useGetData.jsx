import React from "react";
import { useState } from "react";
import axios from "axios";

export function useGetData() {
  function getData(product, setData, setPart, changePeriod) {
    axios
      .get(
        `https://fastcash-back.trafficwave.kz/apply-landing/products?product=${product}`
      )
      .then((response) => {
        setData(response.data.results);
      });
  }
  return { getData };
}
