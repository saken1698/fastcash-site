import React from "react";
import { useState } from "react";
import axios from "axios";

export function useGetData(product) {
  const [data, setData] = useState();
  function GetData(product) {
    axios
      .get(
        `https://fastcash-back.trafficwave.kz/apply-landing/products?product=${product}`
      )
      .then((response) => {
        setData(response.data.results);
      });
  }
  GetData(product);
  return data;
}
