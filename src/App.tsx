import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ReactNotifications } from "react-notifications-component";
import Layout from "@src/Layout/Layout";
import Home from "@pages/Home/Home";
import Products from "@pages/Products/Products";
import Cart from "@pages/Cart/Cart";
import Favorites from "@pages/Favorites/Favorites";
import Checkout from "@pages/Checkout/Checkout";
import "@assets/styles/index.module.scss";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ReactNotifications />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout Component={<Home />} />} />
            <Route
              path="/products"
              element={<Layout Component={<Products />} />}
            />
            <Route path="/cart" element={<Layout Component={<Cart />} />} />
            <Route
              path="/favorites"
              element={<Layout Component={<Favorites />} />}
            />
            <Route
              path="/checkout"
              element={<Layout Component={<Checkout />} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
