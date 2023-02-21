import React from "react";
import SubscribeForm from "@Components/SubscribeForm/SubscribeForm";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>{<SubscribeForm />}</div>
        <div className={styles.copyright}>{t("footer.copyright")}</div>
      </footer>
    </>
  );
}

export default Footer;
