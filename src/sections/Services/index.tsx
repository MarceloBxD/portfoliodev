import React from "react";
import { servicesData } from "@/data/services.data";
import styles from "./styles.module.scss";

export const Services = () => {
  return (
    <section className={styles.services}>
      <h2>{servicesData.title}</h2>
      <div>
        {servicesData.services.map((service) => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <ul className={styles.list}>
              {service.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
