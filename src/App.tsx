import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import Layout from "@src/components/Layout/Layout";
import Home from "@pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import "@assets/styles/index.module.scss";
import "react-notifications-component/dist/theme.css";
function App() {
  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={<Home />} />} />
          <Route
            path="/products"
            element={<Layout Component={<Products />} />}
          />
          <Route path="/cart" element={<Layout Component={<Cart />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
