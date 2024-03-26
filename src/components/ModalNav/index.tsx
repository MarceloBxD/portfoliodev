import React from "react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";
import Image from "next/image";

import { PORTFOLIO_OWNER } from "@/constants";

const nav = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Currículo",
    url: "/cv",
  },
  {
    name: "Serviços",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contato",
    url: "/contact",
  },
];

interface ModalNavProps {
  setOpenModalNav: (isOpen: boolean) => void;
}

export const ModalNav: React.FC<ModalNavProps> = ({ setOpenModalNav }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          layout="fill"
          loading="lazy"
          alt={"Programador em frente a um computador com código na tela"}
          src={"/images/gallery/navimage.jpg"}
        />
      </div>
      <div className={styles.nav}>
        <h1>{PORTFOLIO_OWNER}</h1>
        <ul className={styles.list}>
          {nav.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.close}>
        <X size={32} onClick={() => setOpenModalNav(false)} />
      </div>
    </div>
  );
};
