import React from "react";
import styles from "./styles.module.scss";
import { PORTFOLIO_SWIPER_DATA } from "@/constants";

// TODO: ADD SWIPER COMPONENT

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      {PORTFOLIO_SWIPER_DATA.map((data, index) => (
        <div className={styles.slideTexts} key={index}>
          <h3>{data.upperText}</h3>
          <h1>{data.mainText}</h1>
        </div>
      ))}
    </section>
  );
};
