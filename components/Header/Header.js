import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground} />
      <div className={styles.hero}>
        <h1 className={styles.title}>Chaima Gaddour</h1>
        <h2 className={styles.subtitle}>Artist, Teacher, Manager</h2>
      </div>
    </div>
  );
};

export default Header;
