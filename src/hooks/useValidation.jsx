import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function useValidation() {
  return useFormik({
    initialValues: {
      phone: "",
      uin: "",
      documentNumber: "",
      toggle: false,
      toggle2: false,
      number1: "",
      number2: "",
      number3: "",
      number4: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/\d(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/, "")
        .max(16, "/")
        .min(16, "/")
        .required("required"),
      uin: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .max(12, "must be 12")
        .min(12, "must be 12")
        .required("required"),
      documentNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .max(9, "must be 9")
        .min(9, "must be 9")
        .required("required"),
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
