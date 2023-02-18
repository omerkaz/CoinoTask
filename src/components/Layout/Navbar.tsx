import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import DropdownMenu, { Option } from "../DropdownMenu/DropdownMenu";
function Navbar() {
  const { i18n } = useTranslation();
  const languageOptions = [];

  // we check i18n for language options
  for (const language in i18n.store.data) {
    languageOptions.push({ value: language, label: language.toUpperCase() });
  }
  const handleLanguageDropdownMenu = (language: Option) => {
    language.value === "tr"
      ? i18n.changeLanguage("tr")
      : i18n.changeLanguage("en");
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
          <DropdownMenu
            options={languageOptions}
            onSelect={(language) => handleLanguageDropdownMenu(language)}
          />
          <Link className={styles.navbarCart} to={"/cart"}>
            Cart
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
