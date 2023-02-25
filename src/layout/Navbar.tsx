import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Option } from "@src/types";
import { Link } from "react-router-dom";
import { useAppSelector } from "@src/store/hooks";
import DropdownMenu from "@Components/DropdownMenu/DropdownMenu";
import useLocalStorage from "use-local-storage";
import styles from "./Navbar.module.scss";
import { FaShopify } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar() {
  // for light mode/dark mode
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  // to automatically load the theme setting when the page is refreshed
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
        <div className={styles.navbarList} style={{ marginRight: "4rem" }}>
          <DropdownMenu
            options={languageOptions}
            onSelect={(language) => handleLanguageDropdownMenu(language)}
            width={"150px" as React.CSSProperties}
          />
          <button className={styles.navbarButton} onClick={toggleTheme}>
            {theme === "light" ? (
              <MdDarkMode />
            ) : (
              <MdLightMode style={{ marginLeft: "auto" }} />
            )}
          </button>
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
