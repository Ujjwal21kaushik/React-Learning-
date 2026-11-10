import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="category=:category" element={null} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route
            path="category=:category/detail/:id"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </>
  );
}
