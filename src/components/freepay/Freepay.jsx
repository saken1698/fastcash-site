import React from "react";
import ClosureLinks from "../closureLinks/ClosureLinks";
import Navigation from "../navigation/Navigation";
import classes from "./Freepay.module.css";

function Freepay() {
  return (
    <section className={classes.section}>
      <Navigation name="Как погасить микрокредит" />
      <div className={classes.container}>
        <p className={classes.title}>Как погасить микрокредит</p>
        <ClosureLinks />
        <p className={classes.text}>
          Ежемесячный платёж по кредиту или рассрочке будет автоматом
          списываться с баланса карты в день платежа. По графику и без комиссий.
          Вся информация по ссылке
          <a href="https://bankffin.kz/ru/cards/freepay-card/activation">
            https://bankffin.kz/ru/cards/freepay-card/activation
          </a>
        </p>
      </div>
    </section>
  );
}

export default Freepay;
