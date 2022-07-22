import React from "react";
import ClosureLinks from "../closureLinks/ClosureLinks";
import Navigation from "../navigation/Navigation";
import classes from "./Kassa24.module.css";

function Kassa24({ pdfs }) {
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
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vo0Y8U6oHV8"
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

export default Kassa24;
