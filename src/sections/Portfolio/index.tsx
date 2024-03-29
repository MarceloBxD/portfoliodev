import React from "react";
import { portfolioData } from "@/data/portfolio.data";
import styles from "./styles.module.scss";

export const Portfolio = () => {
  return (
    <section className={styles.container}>
      <h2>{portfolioData.title}</h2>
      <div>
        {portfolioData.projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <ul>
              {project.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
