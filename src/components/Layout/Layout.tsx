import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
type LayoutProps = {
  Component: ReactNode;
};

function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Navbar />
      {Component}
      <Footer />
    </>
  );
}

export default Layout;
