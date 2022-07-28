import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./GettingCredit.module.css";

const steps = [
  {
    step: "Выберите сумму и срок микрокредита",
    discription: `Сумму и срок микрокредита вы выбираете самостоятельно с помощью
    калькулятора на нашем сайте. Вы сразу увидите крайнюю дату погашения
    микрокредита, сумму начисляемого вознаграждения и общую сумму к
    выплате.`,
  },
  {
    step: "Зарегистрируйте профиль",
    discription: `Внимательно ознакомьтесь с договором и другими документами,
    проставьте галочки. Для завершения регистрации Вам необходимо
    подписать оферту при помощи SMS кода. Введите Ваш действующий номер
    телефона и нажмите на кнопку "Получить СМС-код". На указанный Вами
    номер мобильного придет сообщение с уникальным кодом. Время
    получения СМС может занимать до 3 минут, но, как правило, оно
    приходит быстрее. Далее введите СМС-код в окошке справа. После этого
    Вам будет необходимо заполнить поле ИИН, логин и придумать пароль к
    Вашему профилю на Freedom finance credit`,
  },
  {
    step: "Заполните анкету",
    discription: `Для одобрения Вашего микрокредита вам необходимо предоставить
    достоверные данные. Обязательное требование для получения
    микрокредита — действующая банковская карта любого банка РК*. Карта
    должна принадлежать вам и не должна быть предназначена для выплаты
    пенсий и пособий.`,
  },
  {
    step: "Дождитесь решения о предоставлении микрокредита",
    discription: `Телефон, указанный в заявке, должен быть при Вас. В некоторых
    случаях на него позвонит оператор, чтобы задать несколько вопросов.
    Окончательное решение отразится в личным кабинете заемщика. Общее
    время рассмотрения заявки составляет от 10 минут до 1 рабочего дня.`,
  },
  {
    step: "Микрокредит одобрен!",
    discription: `В случае одобрения мы отправим Вам деньги в течение 15 минут.
    Зачисление суммы на Ваш банковскую карту зависит от скорости
    процессов Вашего банка и может занимать от 10 минут до 3 рабочих
    дней. Договор микрокредита и график погашения можете посмотреть в
    личном кабинете на Freedom finance credit, так же вы всегда сможете
    просмотреть информацию о сумме и дате оплаты.`,
  },
];

function GettingCredit() {
  return (
    <section className={classes.section}>
      <Navigation name="Как получить микрокредит" />
      <div className={classes.container}>
        <p className={classes.title}>Как получить микрокредит</p>
        <ol className={classes.steps}>
          {steps.map((item) => {
            return (
              <div>
                <li className={classes.step_title}>{item.step}</li>
                <p className={classes.step_text}>{item.discription}</p>{" "}
              </div>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default GettingCredit;
