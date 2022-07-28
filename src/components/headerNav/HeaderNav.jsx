import React from "react";
import classes from "./HeaderNav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function HeaderNav({ states, setState, setState2, setState3 }) {
  const [state, state2, state3] = states;
  return (
    <div className={classes.nav}>
      <div className={classes.nav_container}>
        <button
          className={classes.nav_menu}
          onClick={() => {
            setState((current) => !current);
          }}
        >
          <svg
            className={classes.svg}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <div className={classes.nav_button}>Меню</div>
        </button>
        <ul
          className={classes.menu_list}
          style={{
            display: state ? "block" : "none",
            opacity: state ? "1" : "0",
          }}
        >
          <Link to="/about" className={classes.row_link}>
            <li className={classes.row}>О компании</li>
          </Link>
          <Link to="/documents" className={classes.row_link}>
            <li className={classes.row}>Документы</li>
          </Link>
          <li
            className={classes.row}
            onClick={(state2) => {
              setState2((current) => !current);
            }}
          >
            Наши продукты
          </li>
          <li className={classes.row}>Что такое мирокредит</li>
          <li
            className={classes.row}
            onClick={(evt) => {
              setState3((current) => !current);
            }}
          >
            FAQ
          </li>
        </ul>
        <ul
          className={classes.menu_second_list}
          style={{
            display: state2 ? "block" : "none",
          }}
        >
          <Link to="/calculator" className={classes.row_link}>
            <li className={classes.row}>Микрокредит "Своим"</li>
          </Link>
          <li className={classes.row}>ОГПО в рассрочку</li>
        </ul>
        <ul
          className={classes.menu_third_list}
          style={{
            display: state3 ? "block" : "none",
          }}
        >
          <Link to="/faq" className={classes.row_link}>
            <li className={classes.row}>Вопросы и ответы</li>
          </Link>
          <Link to="/press-releases" className={classes.row_link}>
            <li className={classes.row}>Пресс-релизы</li>
          </Link>
        </ul>
        <div className={classes.links}>
          <Link to="/how_to_get" className={classes.link}>
            Как получить
          </Link>
          <Link to="/how_to_close" className={classes.link}>
            Как погасить
          </Link>
          <Link to="/contacts" className={classes.link}>
            Контакты
          </Link>
          <Link to="/dashboard" className={classes.link}>
            Панель приборов
          </Link>
          <a
            href="https://bankffin.kz/ru/loan/payment/repayment-loans#/#"
            target="blank"
            className={classes.link_pay}
          >
            <p className={classes.link_text}>Оплатить</p>
          </a>
        </div>
      </div>
    </div>
  );
}
