import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactNotifications } from "react-notifications-component";
import Layout from "@src/layout/Layout";
import Home from "@pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import "@assets/styles/index.module.scss";
import "react-notifications-component/dist/theme.css";
import store from "./store";

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
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
