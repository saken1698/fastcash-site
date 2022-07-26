import React from "react";
import classes from "./smsModal.module.css";
import { useSmsValidation } from "../../hooks/useSmsValidation";
import { SmsModalInputs } from "../smsModalInputs/SmsModalInputs";
import { SmsModalButton } from "../smsModalButton/SmsModalButton";

export function SmsModal({ modalState, switchModal, timer, setTimer, data }) {
  const { values, errors, handleBlur, handleChange, touched } =
    useSmsValidation();

  return (
    <div
      className={classes.modal}
      style={{
        display: modalState ? "flex" : "none",
        opacity: modalState ? "1" : "0",
      }}
    >
      <div className={classes.modal_container}>
        <svg
          className={classes.modal_closeButton}
          onClick={() => {
            switchModal(false);
          }}
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 28.9999C3.86839 29.0007 3.73793 28.9755 3.61609 28.9257C3.49426 28.8759 3.38344 28.8026 3.29 28.7099C3.19627 28.617 3.12188 28.5064 3.07111 28.3845C3.02034 28.2627 2.9942 28.132 2.9942 27.9999C2.9942 27.8679 3.02034 27.7372 3.07111 27.6154C3.12188 27.4935 3.19627 27.3829 3.29 27.2899L27.29 3.28994C27.4783 3.10164 27.7337 2.99585 28 2.99585C28.2663 2.99585 28.5217 3.10164 28.71 3.28994C28.8983 3.47825 29.0041 3.73364 29.0041 3.99994C29.0041 4.26624 28.8983 4.52164 28.71 4.70994L4.71 28.7099C4.61656 28.8026 4.50574 28.8759 4.38391 28.9257C4.26207 28.9755 4.13161 29.0007 4 28.9999Z"
            fill="black"
          ></path>
          <path
            d="M28 28.9999C27.8684 29.0007 27.7379 28.9755 27.6161 28.9257C27.4943 28.8759 27.3834 28.8026 27.29 28.7099L3.29 4.70994C3.10169 4.52164 2.99591 4.26624 2.99591 3.99994C2.99591 3.73364 3.10169 3.47824 3.29 3.28994C3.4783 3.10164 3.7337 2.99585 4 2.99585C4.2663 2.99585 4.52169 3.10164 4.71 3.28994L28.71 27.2899C28.8037 27.3829 28.8781 27.4935 28.9289 27.6154C28.9797 27.7372 29.0058 27.8679 29.0058 27.9999C29.0058 28.132 28.9797 28.2627 28.9289 28.3845C28.8781 28.5064 28.8037 28.617 28.71 28.7099C28.6166 28.8026 28.5057 28.8759 28.3839 28.9257C28.2621 28.9755 28.1316 29.0007 28 28.9999Z"
            fill="black"
          ></path>
        </svg>
        <p className={classes.modal_text}>Введите код из SMS</p>
        <SmsModalInputs
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <SmsModalButton
          timer={timer}
          setTimer={setTimer}
          touched={touched}
          errors={errors}
          data={data}
          values={values}
          switchModal={switchModal}
        />
      </div>
    </div>
  );
}
