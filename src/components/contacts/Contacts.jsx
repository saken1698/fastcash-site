import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Contacts.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Map } from "../map/Map";
function Contacts() {
  return (
    <section className={classes.section}>
      <Navigation name="Контакты" />
      <div className={classes.container}>
        <p className={classes.title}>Контакты</p>
        <div className={classes.info}>
          <div className={classes.information}>
            <table className={classes.table}>
              <tbody className={classes.tbody}>
                <tr className={classes.tr}>
                  <th className={classes.cell}>Адрес:</th>
                  <td className={classes.cell}>
                    Казахстан, город Алматы, Алмалинский район, улица
                    Курмангазы, дом 61а, 4-этаж
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <th className={classes.cell}>Email:</th>
                  <td className={classes.cell}>info@ffin.credit</td>
                </tr>
                <tr className={classes.tr}>
                  <th className={classes.cell}>Телефон:</th>
                  <td className={classes.cell}>
                    +7 727 339 6877, +7 702 075 0028
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <th className={classes.cell}></th>
                  <td className={classes.cell}>
                    Консультация по проблемной задолженности +7 701 318 9419
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <th className={classes.cell}>Режим работы:</th>
                  <td className={classes.cell}>Пн - Пт 09:00 - 18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Map height={"300px"} />
      </div>
    </section>
  );
}

export default Contacts;
