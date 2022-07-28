import React from "react";
import axios from "axios";
export function PostCredit(
  cash,
  period,
  partnerId,
  product,
  repayment_method,
  uin,
  documentNumber,
  phone
) {
  const mobile = phone.replaceAll(" ", "");
  const periodInt = parseInt(period);
  axios
    .post("https://fastcash-back.trafficwave.kz/apply-landing/", {
      channel: "LANDING",
      credit_params: {
        principal: cash,
        period: periodInt,
        repayment_method: repayment_method,
      },
      document_number: documentNumber,
      iin: uin,
      mobile_phone: mobile,
      partner: partnerId,
      product: product,
    })
    .then((response) => {
      console.log(response);
    });
}

// export function usePostCredit(
//   cash,
//   period,
//   partnerId,
//   product,
//   repayment_method,
//   uin,
//   documentNumber,
//   phone
// ) {
//   const mobile = phone.replaceAll(" ", "");
//   const periodInt = parseInt(period);
//   return function postCredit() {
//     axios
//       .post("https://fastcash-back.trafficwave.kz/apply-landing/", {
//         channel: "LANDING",
//         credit_params: {
//           principal: cash,
//           period: periodInt,
//           repayment_method: repayment_method,
//         },
//         document_number: documentNumber,
//         iin: uin,
//         mobile_phone: mobile,
//         partner: partnerId,
//         product: product,
//       })
//       .then((response) => {
//         console.log(response);
//       });
//   };
// }
