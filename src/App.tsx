import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@src/components/Layout/Layout";
import Home from "@pages/Home/Home";
import "@assets/styles/index.module.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
