import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>Like Woman</div>
          <div>Information</div>
          {<Subscribe />}
        </div>
      </footer>
      <div className={styles.copyright}>© 2023 All Rights Reserved.</div>
    </>
  );
}

export default Footer;
