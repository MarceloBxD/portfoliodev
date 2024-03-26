import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { scrollFunction } from "@/utils/getScrollPosition";

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollFunction();
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.bar}>
      <div
        className={styles.progress}
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};
