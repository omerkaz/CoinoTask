import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
function Navbar() {
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
          <Link className={styles.navbarCart} to={"/cart"}>
            Cart
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
