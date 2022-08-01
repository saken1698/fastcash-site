import React from "react";
import classes from "./SmsModalButton.module.css";
import { useRef } from "react";
import { useCreditPost } from "../../hooks/useCreditPost";
import { useSmsPosting } from "../../hooks/useSmsPosting";

export function SmsModalButton({
  timer,
  setTimer,
  touched,
  errors,
  data,
  values,
  switchModal,
}) {
  const [cash, period, partnerId, data2, uin, documentNumber, phone] = data;
  const smsButton = useRef(null);

  const { postCode } = useSmsPosting();
  const { postCredit } = useCreditPost();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timer < 1) {
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  function checkSmsCode() {
    if (touched.number1 && touched.number2 && touched.number3) {
      if (
        !errors.number1 &&
        !errors.number2 &&
        !errors.number3 &&
        !errors.number4
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <button
      className={classes.modal_button}
      ref={smsButton}
      disabled={checkSmsCode() ? false : timer === 0 ? false : true}
      style={{
        backgroundColor: checkSmsCode()
          ? "green"
          : timer === 0
          ? "#72bf44"
          : "grey",
      }}
      onClick={() => {
        if (checkSmsCode() === true) {
          const code =
            values.number1 + values.number2 + values.number3 + values.number4;
          postCode(code);
          switchModal(false);
        } else if (timer === 0) {
          postCredit(
            cash,
            period,
            partnerId,
            data2.product,
            data2.repayment_method.id,
            uin,
            documentNumber,
            phone
          );
          setTimer(60);
        }
      }}
    >
      {checkSmsCode()
        ? "Продолжить"
        : timer === 0
        ? "Запросить код еще раз"
        : `Запросить повторно через ${timer}`}
    </button>
  );
}
