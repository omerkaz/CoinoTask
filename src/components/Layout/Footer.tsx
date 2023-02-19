import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>{<Subscribe />}</div>
        <div className={styles.copyright}>© 2023 All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
