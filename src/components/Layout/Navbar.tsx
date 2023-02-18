import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { i18n } = useTranslation();
  const handleLanguageButton = () => {
    i18n.language === "tr"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("tr");
  };
  return (
    <section className={styles.navbarSection}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link className={styles.navbarBrand} to={"/"}>
            Brand
          </Link>
          <ul className={styles.navbarList}>
            <li className={styles.navbarListItem}>
              <Link className={styles.navbarLink} to={"/"}>
                Home
              </Link>
            </li>
            <li className={styles.navbarListItem}>
              <Link className={styles.navbarLink} to={"/products"}>
                Products
              </Link>
            </li>
            <li className={styles.navbarListItem}>
              <Link className={styles.navbarLink} to={"/favorites"}>
                Favorites
              </Link>
            </li>
            <li className={styles.navbarListItem}>
              <Link className={styles.navbarLink} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <button onClick={handleLanguageButton}>{i18n.language}</button>
          <Link className={styles.navbarCart} to={"/cart"}>
            Cart
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
