import React from "react";
import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={classes.nav}>
      <a className={classes.text}>Главная</a>
      <a className={classes.symbol}>&gt;</a>
      <a className={classes.text}>{props.name}</a>
    </nav>
  );
}

export default Navigation;
