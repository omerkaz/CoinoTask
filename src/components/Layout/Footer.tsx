import React from "react";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>{<SubscribeForm />}</div>
        <div className={styles.copyright}>© 2023 All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
