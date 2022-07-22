import React from "react";
import ClosureInfo from "../closureInfo/ClosureInfo";
import Navigation from "../navigation/Navigation";
import classes from "./Bank.module.css";
import banklogo from "../../images/freedom_bank.png";
import fortebank_logo from "../../images/fortebank.png";
import ClosureLinks from "../closureLinks/ClosureLinks";

function Bank() {
  return (
    <section className={classes.section}>
      <Navigation name="Как погасить микрокредит" />
      <div className={classes.container}>
        <p className={classes.title}>Как погасить микрокредит</p>
        <ClosureLinks />
        <div className={classes.instructions}>
          <div className={classes.option}>
            <img src={banklogo} className={classes.logo} />
            <p className={classes.text}>
              В отделение черезкассираАО Банк Фридом Финанс Казахстан(Комиссия
              не взимаетя с клиента -0%)
            </p>
          </div>
          <div className={classes.option}>
            <img src={fortebank_logo} className={classes.logo_fort} />
            <p className={classes.text}>
              В отделениеАО Форте Банкклиенту нужно произвети оплату через кассу
              банка, сказав уникальны код CE 107 (Комиссия не взимается с
              клиента - 0%)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bank;
