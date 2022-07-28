import React from "react";
import classes from "./ClosureLinks.module.css";
import { Link } from "react-router-dom";

const links = [
  { link: "/how_to_close", text: "Как погасить" },
  { link: "/bankffin24", text: "Погашение кредитов на сайте bankffin.kz" },
  { link: "/qiwi_terminal", text: "QIWI Терминал" },
  { link: "/kassa24_terminal", text: "KASSA24 Терминал" },
  { link: "/bank", text: "Через отделение банка" },
  { link: "/freepay", text: "FREEPAY" },
];

function ClosureLinks() {
  return (
    <div className={classes.links}>
      {links.map((item) => {
        return (
          <Link to={item.link} className={classes.link}>
            {item.text}
          </Link>
        );
      })}
    </div>
  );
}

export default ClosureLinks;
