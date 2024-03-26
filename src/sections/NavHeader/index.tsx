"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Menu } from "lucide-react";
import { ModalNav } from "@/components/ModalNav";

export const NavHeader = () => {
  const [openModalNav, setOpenModalNav] = useState<boolean>(false);

  return (
    <section className={styles.container}>
      <div>
        <h1>Marcelo Bracet</h1>
      </div>
      <div>
        <Menu
          onClick={() => setOpenModalNav(true)}
          className={styles.menuIcon}
          cursor={"pointer"}
          size={32}
        />
      </div>
      {openModalNav && <ModalNav setOpenModalNav={setOpenModalNav} />}
    </section>
  );
};
