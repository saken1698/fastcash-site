import React from "react";
import axios from "axios";

export function usePostData() {
  function postData(partner, cash, period, setState) {
    axios
      .post("https://fastcash-back.trafficwave.kz/apply-landing/schedule", {
        partner: partner,
        principal: cash,
        period: period,
      })
      .then((response) => {
        setState(response.data);
      });
  }

  return { postData };
}
