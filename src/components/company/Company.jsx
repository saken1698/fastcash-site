import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Company.module.css";

function Company() {
  return (
    <section className={classes.section}>
      <Navigation name="О компании" />
      <div className={classes.container}>
        <p className={classes.title}>О компании</p>
        <div className={classes.discription}>
          <p className={classes.text}>
            ТОО «Микрофинансовая организация ФРИДОМ ФИНАНС Кредит» осуществляет
            свою деятельность на основании Лицензии № 02.21.0062.M.от 31.03.2021
            года, выданной Управлением региональных представителей в г.Алматы
            Агентства Республики Казахстан по регулированию и развитию
            финансовых рынков.
          </p>
          <p className={classes.text}>
            ТОО «Микрофинансовая организация ФРИДОМ ФИНАНС Кредит» осуществляет
            предоставление микрокредитов индивидуальным предпринимателям,
            физическим и юридическим лицам, микрокредитные продукты выдаются под
            залог имущества (недвижимость и авто) и срочные онлайн-микрокредиты
            без залога.
          </p>
        </div>
        <div className={classes.requisites}>
          <p className={classes.requisites_headline}>
            <b>АО «Банк Фридом Финанс Казахстан»</b>
          </p>
          <div className={classes.requisites_info}>
            <p className={classes.requisites_title}>
              <b>БИН</b>
            </p>
            <p className={classes.requisites_text}>190340008954</p>
          </div>
          <div className={classes.requisites_info}>
            <p className={classes.requisites_title}>
              <b>БИК</b>
            </p>
            <p className={classes.requisites_text}>KSNVKZKA</p>
          </div>
          <div className={classes.requisites_info}>
            <p className={classes.requisites_title}>
              <b>IBAN</b>
            </p>
            <p className={classes.requisites_text}>KZ45551A127015670KZT</p>
          </div>
          <div className={classes.requisites_info}>
            <p className={classes.requisites_title}>
              <b>КБЕ</b>
            </p>
            <p className={classes.requisites_text}>15</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
