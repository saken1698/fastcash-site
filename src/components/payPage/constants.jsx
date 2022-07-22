import React from "react";
import { Formik, useFormik, validateYupSchema, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export const prod = [
  { name: "Авиабилет", key: "AIR_TICKET" },
  { name: "Страховой полис ОГПО", key: "INSURANCE" },
  { name: "Товарный кредит", key: "COMMODITY_CREDIT" },
];
