import React from "react";
import axios from "axios";

export function useCreditPost() {
  function postCredit(cash, period, partnerId, data, user) {
    const mobile = user.phone.replaceAll(" ", "");
    const periodInt = parseInt(period);
    axios
      .post("https://fastcash-back.trafficwave.kz/apply-landing/", {
        channel: "LANDING",
        credit_params: {
          principal: cash,
          period: periodInt,
          repayment_method: data.repayment_method.id,
        },
        document_number: user.documentNumber,
        iin: user.uin,
        mobile_phone: mobile,
        partner: partnerId,
        product: data.product,
      })
      .then((response) => {
        console.log(response);
      });
  }
  return { postCredit };
}
