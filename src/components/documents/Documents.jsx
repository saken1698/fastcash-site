import React from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Documents.module.css";

function Documents({ pdfs }) {
  return (
    <section className={classes.section}>
      <Navigation name="Документы" />
      <div className={classes.container}>
        <p className={classes.title}>Документы</p>
        <ol className={classes.list}>
          {pdfs.map((pdf) => (
            <li className={classes.pdf}>
              <a target="blank" className={classes.document} href={pdf.upload}>
                {pdf.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Documents;
