import React from "react";
import logo from "../../images/logo.svg";
import styles from "./Header.module.css";
import VisuallyHidden from "../VisuallyHidden";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Splitter" />
      <VisuallyHidden>Splitter (Logo)</VisuallyHidden>
    </header>
  );
}

export default Header;
