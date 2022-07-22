import React from "react";
import classes from "./CreditClosure.module.css";
import { useState, useEffect } from "react";
import Navigation from "../navigation/Navigation";
import ClosureLinks from "../closureLinks/ClosureLinks";

function CreditClosure({ pdfs }) {
  return (
    <section className={classes.section}>
      <Navigation name="Как погасить микрокредит" />
      <div className={classes.container}>
        <p className={classes.title}>Как погасить микрокредит</p>
        <ClosureLinks />
        <div className={classes.instructions}>
          <ol className={classes.list}>
            {pdfs.map((pdf) => (
              <li>
                <a
                  target="blank"
                  className={classes.document}
                  href={pdf.upload}
                >
                  {pdf.name}
                </a>
              </li>
            ))}
          </ol>
          <div className={classes.iframes}>
            <iframe
              className={classes.iframe}
              width="420"
              height="250"
              src="https://www.youtube-nocookie.com/embed/CvmXx_gL_L4"
              title="YouTube video player"
              frameBorder="no"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
            <iframe
              className={classes.iframe}
              width="420"
              height="250"
              src="https://www.youtube-nocookie.com/embed/j0ha5DCH960"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditClosure;
