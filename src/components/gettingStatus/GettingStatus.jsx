import React from "react";
import { Map } from "../map/Map";
import classes from "./GettingStatus.module.css";

const steps = [
  {
    number: "01",
    text: "Выберите компанию, где Вы хотели бы приобрести товар или услугу.",
  },
  { number: "02", text: "Узнайте решение сразу, заполнив всего три поля." },
  {
    number: "03",
    text: "Готово. После одобрения вы можете сразу перейти к оформлению покупок.",
  },
];

const procedure = [
  { number: "01", text: "1. КОНСУЛЬТАЦИЯ ПО МИКРОКРЕДИТУ" },
  { number: "02", text: "2. ЗАПОЛНЕНИЕ ЗАЯВЛЕНИЯ НА ВЫДАЧУ МИКРОКРЕДИТА" },
  { number: "03", text: "3. РАССМОТРЕНИЕ ЗАЯВКИ ПО МИКРОКРЕДИТУ" },
  {
    number: "04",
    text: `4. ПРИ ПОЛОЖИТЕЛЬНОМ РЕЗУЛЬТАТЕ - ПОДПИСАНИЕ ДОГОВОРА И ВЫДАЧА МИКРОКРЕДИТА`,
  },
];

const methods = [
  { number: "1", text: "ЧЕРЕЗ ЛИЧНЫЙ КАБИНЕТ МФО" },
  { number: "2", text: "ЧЕРЕЗ КАССУ ФОРТЕ БАНКА" },
  { number: "3", text: "ЧЕРЕЗ КИВИ ТЕРМИНАЛ" },
  { number: "4", text: "ЧЕРЕЗ ТЕРМИНАЛЫ КАССА 24" },
];

function GettingStatus() {
  return (
    <div className={classes.container}>
      <div className={classes.warning}>
        <p className={classes.warning_text}>
          <span className={classes.warning_red}>!</span>
          Официальное обращение к клиентам МФО FREEDOM FINANCE CREDIT в режиме
          ЧС.
          <span className={classes.warning_red}>Подробнее</span>
        </p>
      </div>
      <div className={classes.instructions}>
        <p className={classes.headline}>Как узнать статус одобрения на займ?</p>
        <div className={classes.steps}>
          {steps.map((item) => {
            return (
              <div className={classes.step}>
                <div className={classes.number}>
                  <p className={classes.num}>{item.number}</p>
                </div>
                <p className={classes.text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.procedure}>
        <p className={classes.procedure_headline}>
          Простая процедура оформления микрокредита:
        </p>
        <div className={classes.procedure_steps}>
          {procedure.map((item) => {
            return (
              <div className={classes.procedure_step}>
                <p className={classes.procedure_number}>{item.number}</p>
                <p className={classes.procedure_stepDis}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.methods}>
        <p className={classes.methods_title}>Способы оплаты микрокредита</p>
        <div className={classes.methods_list}>
          {methods.map((item) => {
            return (
              <div className={classes.method}>
                <div className={classes.method_num}>
                  <p className={classes.method_number}>{item.number}</p>
                </div>
                <p className={classes.method_text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.map}>
        {" "}
        <Map height={"500px"} />
      </div>

      <div className={classes.contacts}>
        <p className={classes.contacts_titles}>Контакты</p>
        <p className={classes.contacts_titles}>Казахстан, город Алматы,</p>
        <p className={classes.contacts_titles}>Алмалинский район, улица</p>
        <p className={classes.contacts_titles}>Курмангазы, дом 61а, 4-этаж</p>
        <div className={classes.contacts_phone}>
          <div className={classes.phone_list}>
            <p className={classes.phone}>+7 727 339 68 77,</p>
            <p className={classes.phone}>+7 702 075 0028</p>
          </div>
          <p className={classes.email}>info@ffin.credit</p>
        </div>
        <div className={classes.contact_service}>
          Консультация по проблемной задолженности
          <p className={classes.service_phone}> +7 701 318 9419</p>
        </div>
        <button className={classes.button}>Личный кабинет</button>
        <p className={classes.schedule}>Режим работы: Пн - Пт 09:00 - 18:00</p>
      </div>
    </div>
  );
}

export default GettingStatus;
