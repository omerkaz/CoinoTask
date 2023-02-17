import React from "react";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className="">
            <div>Information</div>
            <div>Subscribe</div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>© 2023 All Rights Reserved.</div>
    </>
  );
}

export default Footer;
