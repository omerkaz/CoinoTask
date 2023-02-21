import React from "react";
import { useTranslation } from "react-i18next";
import { Option } from "@src/types";
import { Link } from "react-router-dom";
import { useAppSelector } from "@src/store/hooks";
import DropdownMenu from "@Components/DropdownMenu/DropdownMenu";
import styles from "./Navbar.module.scss";
import { FaShopify } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  const { t, i18n } = useTranslation();
  const languageOptions: Option[] = [];

  // we check i18n for language options and send DropdownMenu
  for (const language of i18n.languages) {
    languageOptions.push({ value: language, label: language.toUpperCase() });
  }
  const handleLanguageDropdownMenu = (language: Option) => {
    language.value === "tr"
      ? i18n.changeLanguage("tr")
      : i18n.changeLanguage("en");
  };

  const productsNumberInCart = useAppSelector(
    (state) => state.cart.cartItems.length
  );

  return (
    <section className={styles.navbarSection}>
      <nav className={styles.navbar}>
        <Link className={styles.navbarBrand} to={"/"}>
          <FaShopify size={35} />
        </Link>
        <ul className={styles.navbarList}>
          <li className={styles.navbarListItem}>
            <Link className={styles.navbarLink} to={"/"}>
              {t("navbar.home")}
            </Link>
          </li>
          <li className={styles.navbarListItem}>
            <Link className={styles.navbarLink} to={"/products"}>
              {t("navbar.products")}
            </Link>
          </li>
          <li className={styles.navbarListItem}>
            <Link className={styles.navbarLink} to={"/favorites"}>
              {t("navbar.favorites")}
            </Link>
          </li>
        </ul>
        <div className={styles.navbarList}>
          <DropdownMenu
            options={languageOptions}
            onSelect={(language) => handleLanguageDropdownMenu(language)}
            width="50px"
          />
          <Link className={styles.navbarCart} to={"/cart"}>
            <BsFillCartFill size={22} />
            <span>{productsNumberInCart}</span>
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
