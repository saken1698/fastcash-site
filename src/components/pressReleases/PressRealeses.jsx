import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./PressRealeses.module.css";

function PressRealeses() {
  return (
    <section className={classes.section}>
      <Navigation name="Пресс-релизы" />
      <div className={classes.container}>
        <p className={classes.title}>Пресс-релизы</p>
        <p className={classes.headline}>
          <b>
            ТОО «Микрофинансовая организация ФРИДОМ ФИНАНС Кредит» (далее - МФО)
            выражает искренние и глубокие соболезнования родным и близким
            погибших в ходе антитеррористических операций на территории
            Республики Казахстан. МФО сообщает, что за просроченные платежи по
            микрокредитам, в период с 5 по 19 января 2022 года — пеня не
            начисляется.
          </b>
        </p>
        <p className={classes.headline}>
          <b>
            Отсрочка ежемесячного платежа по договору о предоставлении
            микрокредита в связи введением чрезвычайного положения
          </b>
        </p>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b>Как оформить заявку?</b>
          </p>
          <p className={classes.answer}>
            Заявку можно оставить написав на почту info@ffin.credit или в МФО.
            Написать заявление можно в произвольной форме, с указанием причин
            отсрочки платежей по микрокредиту.
          </p>
        </div>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b>Какие микрокредиты участвуют в отсрочке ежемесячного платежа?</b>
          </p>
          <p className={classes.answer}>
            Все действующие займы, выданные до 05.01.2022.
          </p>
        </div>
        <div className={classes.questions}>
          <p className={classes.question}>Период подачи заявки:</p>
          <p className={classes.answer}>до 04 апреля 2022 года.</p>
        </div>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b>Документы для подачи заявки:</b>
          </p>
          <p className={classes.answer}>
            Удостоверение личности заемщика, документы подтверждающие ухудшение
            финансового состояния заёмщика в результате введения ЧП.
          </p>
        </div>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b>Срок рассмотрения заявки Банком:</b>
          </p>
          <p className={classes.answer}>10 рабочих дней.</p>
        </div>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b>
              {" "}
              Штрафы и пени за просрочку ежемесячных платежей по микрокредитам
              взиматься не будут:
            </b>
          </p>
          <p className={classes.answer}>
            · на период ЧП - с 5 по 19 января 2022 г.
          </p>
          <p className={classes.answer}>
            · на срок предоставленной МФО отсрочки
          </p>
        </div>
        <p className={classes.question}>
          Обращаем внимание на то, что МФО при рассмотрении заявления вправе
          запросить дополнительные документы и сведения, необходимые МФО для
          принятия по нему решения в соответствии с требованиями
          законодательства Республики Казахстан и внутренних нормативных
          документов МФО.
        </p>
        <div className={classes.questions}>
          <p className={classes.question}>
            <b> Для дополнительной консультации обращайтесь по номеру:</b>
          </p>
          <p className={classes.answer}>
            +7 (727) 339-68-77, +7 (702) 075 00 28.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PressRealeses;
