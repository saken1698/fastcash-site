import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function useSmsValidation() {
  return useFormik({
    initialValues: {
      number1: "",
      number2: "",
      number3: "",
      number4: "",
    },
    validationSchema: Yup.object({
      number1: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("required"),
      number2: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("required"),
      number3: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("required"),
      number4: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("required"),
    }),
  });
}
