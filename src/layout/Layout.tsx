import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
type LayoutProps = {
  Component: ReactNode;
};

function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.pageContainer}>{Component}</main>
      <Footer />
    </>
  );
}

export default Layout;
