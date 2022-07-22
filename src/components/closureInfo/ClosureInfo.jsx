import classes from "./ClosureInfo.module.css";
import React from "react";
import Navigation from "../navigation/Navigation";
import ClosureLinks from "../closureLinks/ClosureLinks";

function ClosureInfo() {
  return (
    <section className={classes.section}>
      <Navigation name="Как погасить микрокредит" />
      <div className={classes.container}>
        <p className={classes.title}>Как погасить микрокредит</p>
        <ClosureLinks />
        <div className={classes.article}>
          <p className={classes.text}>
            При своевременном погашении микрокредита Вы улучшаете свою кредитную
            историю и увеличиваете шансы получить следующий микрокредит на более
            выгодных условиях. Вы можете произвести платеж одним из следующих
            способов оплаты:
          </p>
          <ul className={classes.list}>
            <li className={classes.list_text}>
              Погашение кредитов на сайте bankffin.kz{" "}
              <b>(Комиссия взимается с клиента в размере 0,65%)</b>
            </li>
            <li className={classes.list_text}>
              Онлайн в Личном кабинете{" "}
              <b>(Комиссия взимается с клиента в размере 2,5%)</b>
            </li>
            <li className={classes.list_text}>
              Вы можете оплатить микрокредит в терминалах QIWI и Кассы 24 указав
              ИИН. <b>(Комиссия взимается с клиента в размере 2,5%)</b>
            </li>
          </ul>
          <p className={classes.text}>
            <b>Как погасить микрокредит досрочно частично?</b>
          </p>
          <p className={classes.text}>
            Для частичного погашения заемщик должен оплатить не менее 3-х
            ежемесячных платежей. После частичного погашения график платежей
            пересчитывается и делается новый график платежей на остаток суммы
            задолженности.
          </p>
          <p className={classes.text}>
            <b>Как погасить микрокредит досрочно полностью?</b>
          </p>
          <p className={classes.text}>
            Микрокредит досрочно полностью можно закрыть в любое время. При
            досрочном полном погашении микрокредита пересчитывается
            вознаграждение на фактическую дату погашения.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClosureInfo;
