import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Company.module.css";

const requisites = [
  { title: "БИН", text: "190340008954" },
  { title: "БИК", text: "KSNVKZKA" },
  { title: "IBAN", text: "KZ45551A127015670KZT" },
  { title: "КБЕ", text: "15" },
];

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
          {requisites.map((item) => {
            return (
              <div className={classes.requisites_info}>
                <p className={classes.requisites_title}>
                  <b>{item.title}</b>
                </p>
                <p className={classes.requisites_text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Company;
