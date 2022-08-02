import React, { useEffect } from "react";
import { useState } from "react";

export function useCheckingSms(errors, values) {
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    function checkErrors() {
      if (!errors.phone && !errors.uin && !errors.documentNumber) {
        if (values.toggle === true && values.toggle2 === true) {
          setChecked(false);
        } else {
          setChecked(true);
        }
      } else {
        setChecked(true);
      }
    }
    checkErrors();
  }, [errors, values]);
  return checked;
}
