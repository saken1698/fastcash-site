import React from "react";
import classes from "./ClosureLinks.module.css";
import { Link } from "react-router-dom";

function ClosureLinks() {
  return (
    <div className={classes.links}>
      <Link to="/how_to_close" className={classes.link}>
        Как погасить
      </Link>
      <Link to="/bankffin24" className={classes.link}>
        Погашение кредитов на сайте bankffin.kz
      </Link>
      <Link to="/qiwi_terminal" className={classes.link}>
        QIWI Терминал
      </Link>
      <Link to="/kassa24_terminal" className={classes.link}>
        KASSA24 Терминал
      </Link>
      <Link to="/bank" className={classes.link}>
        Через отделение банка
      </Link>
      <Link className={classes.link} to="/freepay">
        FREEPAY
      </Link>
    </div>
  );
}

export default ClosureLinks;
