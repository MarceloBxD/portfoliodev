import React from "react";
import styles from "./styles.module.scss";
import {
  ABOUT_BACKGROUND_TEXT,
  PORTFOLIO_OWNER_EMAIL,
  PORTFOLIO_OWNER_PHONE,
} from "@/constants";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgArea}>
        <div className={styles.img}>...</div>
      </div>
      <div className={styles.textArea}>
        <h1>{ABOUT_BACKGROUND_TEXT}</h1>
        <p>Hi! I'm Marcelo Bracet</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          recusandae numquam saepe fugit odit, accusamus sit ipsam error
          adipisci incidunt, nulla, repudiandae distinctio. Cumque praesentium,
          doloribus harum accusamus rem repudiandae?
        </p>
      </div>
    </section>
  );
};
