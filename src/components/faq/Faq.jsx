import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Faq.module.css";

function Faq() {
  return (
    <section className={classes.section}>
      <Navigation name="Вопросы и ответы" />
      <div className={classes.container}>
        <p className={classes.title}>Вопросы и ответы</p>
        <div className={classes.answers}>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>1. Какие условия для получения микрокредита?</b>
            </p>
            <p className={classes.answer_text}>
              Микрокредит предоставляет микрофинансовая организация FREEDOM
              FINANCE Credit: Микрокредит выдается только гражданам Казахстана
              от 20 лет; В сумму микрокредита входит страхование жизни - полис
              предоставляет FREEDOM FINANCE Credit Insurance; Для получения
              микрокредита необходим ИИН и привязанный к нему номер телефона;
              Микрокредит может оформить клиент, который покупает авиабилеты;
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>2. Кто предоставляет микрокредит?</b>
            </p>
            <p className={classes.answer_text}>
              ТОО "Microfinance Organization FREEDOM FINANCE Credit
              (Микрофинансовая организация ФРИДОМ ФИНАНС Кредит)" —
              предоставляет микрокредиты индивидуальным предпринимателям,
              физическим и юридическим лицам, осуществляющим свою деятельность в
              РК . Выдаются срочные онлайн-микрокредиты без залога. Товарищество
              с ограниченной ответственностью "Microfinance Organization FREEDOM
              FINANCE Credit (Микрофинансовая организация ФРИДОМ ФИНАНС Кредит)"
              зарегистрирована 11.03.2019 года в Реестре организаций,
              осуществляющих микрофинансовую деятельность под номером 05.19.004
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>3. Что такое Аннуитет и Дифференцированный платеж?</b>
            </p>
            <p className={classes.answer_text}>
              Аннуитетный платеж — это платеж по микрокредиту, размер которого
              не меняется. То есть каждый месяц на протяжении всего срока
              микрокредитования вы платите одну и ту же сумму . Но соотношение
              основного долга и процентов в платежах разное. Иногда размеры
              первого и последнего платежей могут отличаться от других.
              Дифференцированный платеж — это платеж, размер которого каждый
              месяц становится меньше. Сумма основного долга в платеже не
              меняется, но проценты, которые начисляются на остаток основного
              долга будут уменьшаться по мере выплаты микрокредита.
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>4. Как и где я буду оплачивать микрокредит?</b>
            </p>
            <p className={classes.answer_text}>
              Микрокредит можно оплатить 2 способами. Через терминалы QIWI и
              Касса24: Нажмите на экране терминала «Оплата услуг»; Выберите:
              Погашение микрокредитов/Фин.услуги - МКО и МФО - ТОО МФО «FREEDOM
              FINANCE credit»; Введите Ваш ИИН и внесите необходимую сумму
              погашения наличными. Через личный кабинет Freedom finance credit:
              Откройте сайт Freedom finance credit; Для входа в личный кабинет
              введите ИИН (на который оформлен ваш микрокредит) и пароль;
              Привяжите вашу карту в личном кабинете и оплачивайте микрокредит
              онлайн.
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>5. Как я получу договор?</b>
            </p>
            <p className={classes.answer_text}>
              Договор всегда доступен для скачивания в Вашем личном кабинете на
              сайте «FREEDOM FINANCE Credit».
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>6. Можно ли погасить микрокредит досрочно?</b>
            </p>
            <p className={classes.answer_text}>
              Можно полностью погасить микрокредит досрочно в любое время. При
              полном досрочном погашении вознаграждение пересчитывается на
              фактическую дату погашения
            </p>
          </div>
          <div className={classes.answer}>
            <p className={classes.answer_title}>
              <b>
                7. Если оплата микрокредита производится онлайн, мне будут
                предоставлены чеки?
              </b>
            </p>
            <p className={classes.answer_text}>
              Вся информацию о платежах будет представлена в вашем личном
              кабинете на сайте Freedom finance credit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
