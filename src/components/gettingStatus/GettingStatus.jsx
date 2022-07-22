import React from "react";
import { Map } from "../map/Map";
import classes from "./GettingStatus.module.css";

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
          <div className={classes.step}>
            <div className={classes.number}>
              <p className={classes.num}>01</p>
            </div>
            <p className={classes.text}>
              Выберите компанию, где Вы хотели бы приобрести товар или услугу.
            </p>
          </div>
          <div className={classes.step}>
            <div className={classes.number}>
              <p className={classes.num}>02</p>
            </div>
            <p className={classes.text}>
              Узнайте решение сразу, заполнив всего три поля.
            </p>
          </div>
          <div className={classes.step}>
            <div className={classes.number}>
              <p className={classes.num}>03</p>
            </div>
            <p className={classes.text}>
              Готово. После одобрения вы можете сразу перейти к оформлению
              покупок.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.procedure}>
        <p className={classes.procedure_headline}>
          Простая процедура оформления микрокредита:
        </p>
        <div className={classes.procedure_steps}>
          <div className={classes.procedure_step}>
            <p className={classes.procedure_number}>01</p>
            <p className={classes.procedure_stepDis}>
              1. КОНСУЛЬТАЦИЯ ПО МИКРОКРЕДИТУ
            </p>
          </div>
          <div className={classes.procedure_step}>
            <p className={classes.procedure_number}>02</p>
            <p className={classes.procedure_stepDis}>
              2. ЗАПОЛНЕНИЕ ЗАЯВЛЕНИЯ НА ВЫДАЧУ МИКРОКРЕДИТА
            </p>
          </div>
          <div className={classes.procedure_step}>
            <p className={classes.procedure_number}>03</p>
            <p className={classes.procedure_stepDis}>
              3. РАССМОТРЕНИЕ ЗАЯВКИ ПО МИКРОКРЕДИТУ
            </p>
          </div>
          <div className={classes.procedure_step}>
            <p className={classes.procedure_number}>04</p>
            <p className={classes.procedure_stepDis}>
              4. ПРИ ПОЛОЖИТЕЛЬНОМ РЕЗУЛЬТАТЕ - ПОДПИСАНИЕ ДОГОВОРА И ВЫДАЧА
              МИКРОКРЕДИТА
            </p>
          </div>
        </div>
      </div>
      <div className={classes.methods}>
        <p className={classes.methods_title}>Способы оплаты микрокредита</p>
        <div className={classes.methods_list}>
          <div className={classes.method}>
            <div className={classes.method_num}>
              <p className={classes.method_number}>1</p>
            </div>
            <p className={classes.method_text}>ЧЕРЕЗ ЛИЧНЫЙ КАБИНЕТ МФО</p>
          </div>
          <div className={classes.method}>
            <div className={classes.method_num}>
              <p className={classes.method_number}>2</p>
            </div>
            <p className={classes.method_text}>ЧЕРЕЗ КАССУ ФОРТЕ БАНКА</p>
          </div>
          <div className={classes.method}>
            <div className={classes.method_num}>
              <p className={classes.method_number}>3</p>
            </div>
            <p className={classes.method_text}>ЧЕРЕЗ КИВИ ТЕРМИНАЛ</p>
          </div>
          <div className={classes.method}>
            <div className={classes.method_num}>
              <p className={classes.method_number}>4</p>
            </div>
            <p className={classes.method_text}>ЧЕРЕЗ ТЕРМИНАЛЫ КАССА 24</p>
          </div>
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
