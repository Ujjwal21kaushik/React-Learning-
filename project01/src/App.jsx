import React from 'react';
import Navbar from './Components/Navbar';
import {Route, Routes } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';

export default function App() {
  
    return (
      <>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path='product/:id' element={<ProductDetail />} />
          </Route>
        </Routes>
      </>
    );
}