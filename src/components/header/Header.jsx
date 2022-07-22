import React from "react";
import classes from "./Header.module.css";
// import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";

function Header() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  function changeState(state) {
    setState((current) => !current);
  }

  function changeState2(state2) {
    setState2((current) => !current);
  }

  function changeState3(state3) {
    setState3((current) => !current);
  }

  const menu = useRef(null);
  const menu2 = useRef(null);
  const menu3 = useRef(null);
  const menuButton = useRef(null);

  return (
    <header className={classes.header}>
      <div
        className={classes.dropbox}
        onClick={() => {
          setState(false);
          setState2(false);
          setState3(false);
        }}
        style={{
          zIndex: state ? "2" : "-1",
        }}
      ></div>
      <div className={classes.container}>
        <Link to="/calculator">
          <svg
            className={classes.logo}
            viewBox="0 0 226 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // style="height: 40px;"
          >
            <path
              d="M29.3 67.8C29.3 67.8 0 59.1 0 16.4V0H58.7V16.4C58.6 57.6 29.3 67.8 29.3 67.8Z"
              fill="#4FB84E"
            ></path>
            <path
              d="M97.9998 20.2H100.5C101.4 20.2 102.1 19.9999 102.7 19.4999C103.2 18.9999 103.5 18.3 103.5 17.4C103.5 16.1 103 15.3 102.1 14.9C101.6 14.7 100.9 14.5999 99.9998 14.5999H97.9998V20.2ZM92.2998 32.8V9.69995H100.4C102.4 9.69995 103.9 9.89996 104.9 10.3C106.2 10.8 107.3 11.7 108 12.8C108.8 14 109.1 15.3999 109.1 16.9999C109.1 18.2999 108.8 19.5 108.2 20.7C107.6 21.9 106.7 22.7 105.6 23.3V23.4C105.8 23.7 106.1 24.1 106.5 24.8L111 32.9H104.7L100.6 25.0999H97.9998V32.9H92.2998V32.8Z"
              fill="black"
            ></path>
            <path
              d="M113.6 32.8V9.69995H128.1V14.4999H119.3V18.7H126.3V23.5999H119.3V27.9999H128.5V32.8H113.6Z"
              fill="black"
            ></path>
            <path
              d="M132.2 32.8V9.69995H146.7V14.4999H137.8V18.7H144.9V23.5999H137.8V27.9999H147.1V32.8H132.2Z"
              fill="black"
            ></path>
            <path
              d="M156.4 27.9999H158.7C160.7 27.9999 162.2 27.4 163.3 26.3C164.4 25.1 165 23.5 165 21.3C165 19.1 164.4 17.5 163.3 16.3C162.2 15.2 160.6 14.5999 158.7 14.5999H156.4V27.9999ZM150.7 32.8V9.69995H158.9C162.6 9.69995 165.5 10.7 167.6 12.8C169.7 14.8 170.8 17.7 170.8 21.3C170.8 24.9 169.7 27.8 167.6 29.8C165.5 31.9 162.5 32.9 158.9 32.9H150.7V32.8Z"
              fill="black"
            ></path>
            <path
              d="M179.2 21.1C179.2 23.1 179.8 24.7 181 26C182.2 27.3 183.7 28 185.5 28C187.3 28 188.8 27.3 190 26C191.2 24.7 191.8 23 191.8 21.1C191.8 19.2 191.2 17.6001 190 16.4001C188.8 15.1001 187.3 14.5 185.5 14.5C183.7 14.5 182.2 15.1001 181 16.4001C179.8 17.6001 179.2 19.2 179.2 21.1ZM173.3 21.1C173.3 17.7 174.4 14.9 176.7 12.7C179 10.4 181.9 9.30005 185.4 9.30005C188.9 9.30005 191.8 10.4 194.1 12.7C196.4 15 197.5 17.8 197.5 21.1C197.5 24.5 196.4 27.4 194.1 29.7C191.8 32 188.9 33.2 185.4 33.2C181.9 33.2 179 32 176.7 29.7C174.4 27.4 173.3 24.6 173.3 21.1Z"
              fill="black"
            ></path>
            <path
              d="M200.2 32.8L202.1 9.69995H208.2L211.6 19.4999L212.8 23.3H212.9C213.3 21.7 213.7 20.4999 214.1 19.4999L217.5 9.69995H223.6L225.5 32.8H219.8L219.1 22.4C219.1 21.9 219 21.3 219 20.7C219 20.1 219 19.4999 219 19.0999V18.4999V18.4999C218.5 20.0999 218.1 21.4 217.7 22.4L215.3 29.0999H210.4L208 22.4L206.7 18.4999H206.6C206.7 19.8999 206.7 21.2 206.6 22.4L205.9 32.8H200.2V32.8Z"
              fill="black"
            ></path>
            <path
              d="M46.2001 16.5001H22.6001V30.1001H46.2001V34.2001C46.2001 41.1001 44.3001 46.6001 33.8001 46.7001H22.6001V64.6001C26.5001 67.0001 29.3001 67.8001 29.3001 67.8001C29.3001 67.8001 58.6001 57.6001 58.6001 16.4001V4.1001C58.6001 10.9001 55.6001 16.4001 46.2001 16.5001Z"
              fill="#055532"
            ></path>
            <path
              d="M83.6002 40.8C85.8002 40.8 88.2002 41.5001 89.8002 43.1001L87.9002 46.1001C86.8002 45.2001 85.2002 44.4001 83.8002 44.4001C80.5002 44.4001 79.1002 46.7001 79.1002 49.1001C79.1002 51.5001 80.6002 54.1001 83.8002 54.1001C85.4002 54.1001 87.1002 53.2001 88.2002 52.1001L90.3002 55.1001C88.8002 56.6001 86.7002 57.9001 83.7002 57.9001C78.4002 57.9001 75.1002 54.2 75.1002 49.3C74.9002 44.5 78.5002 40.8 83.6002 40.8Z"
              fill="black"
            ></path>
            <path
              d="M92.3002 41H98.0002C99.7002 41 100.5 41.1 101.2 41.4C103.1 42.1 104.2 43.8 104.2 46.2C104.2 48 103.4 49.9 101.7 50.7C101.7 50.7 101.9 51 102.3 51.7L105.5 57.5H101L98.1002 51.9H96.2002V57.5H92.2002V41H92.3002ZM98.1002 48.5C99.4002 48.5 100.2 47.8 100.2 46.5C100.2 45.7 100 45 99.2002 44.7C98.8002 44.5 98.3002 44.5 97.7002 44.5H96.3002V48.5H98.1002Z"
              fill="black"
            ></path>
            <path
              d="M107.5 41H117.8V44.5H111.5V47.5H116.5V51H111.5V54.1H118.1V57.6H107.4V41H107.5Z"
              fill="black"
            ></path>
            <path
              d="M120.7 41H126.6C131.8 41 135.1 44 135.1 49.2C135.1 54.4 131.8 57.5 126.6 57.5H120.7V41ZM126.4 54.1C129.2 54.1 130.9 52.4 130.9 49.3C130.9 46.2 129.1 44.5 126.4 44.5H124.7V54.1H126.4V54.1Z"
              fill="black"
            ></path>
            <path d="M137.7 41H141.7V57.5H137.7V41Z" fill="black"></path>
            <path
              d="M148.7 44.5H143.7V41H157.7V44.5H152.7V57.5H148.7V44.5Z"
              fill="black"
            ></path>
            <path
              d="M74.8999 32.8V9.69995H89.0999V11.4C89.0999 13.1 87.6999 14.4999 85.9999 14.4999H80.5999V19.4H87.6999V20.9999C87.6999 22.7999 86.2999 24.2 84.4999 24.2H80.6999V32.8H74.8999Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        <button className={classes.button}>Личный кабинет</button>
      </div>
      <div className={classes.nav}>
        <div className={classes.nav_container}>
          <button
            ref={menuButton}
            className={classes.nav_menu}
            onClick={(state) => {
              changeState(state);
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
            ref={menu}
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
                changeState2(state2);
                // changeState(state);
              }}
            >
              Наши продукты
            </li>
            <li className={classes.row}>Что такое мирокредит</li>
            <li
              className={classes.row}
              onClick={(evt) => {
                changeState3(state3);
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
            ref={menu2}
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
            ref={menu3}
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
    </header>
  );
}

export default Header;
