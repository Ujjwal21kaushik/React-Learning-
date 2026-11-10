import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import CreateProduct from "./Pages/CreateProduct";

export default function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="category=:category" element={null} />
        <Route path="detail/:id" element={<ProductDetail />} />
        <Route path="create/" element={<CreateProduct />} />
      </Routes>
    </>
  );
}
