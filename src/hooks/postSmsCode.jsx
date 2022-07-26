import React from "react";
import axios from "axios";

export function PostSmsCode(code) {
  return axios
    .post(
      "https://fastcash-back.trafficwave.kz/apply-landing/verify/94eb2be1-636e-4287-bdde-304b82958a96",
      {
        sms_code: code,
      }
    )
    .then((response) => {
      console.log(response);
    });
}
