import React from 'react'
import { Route, Routes} from "react-router-dom";
import Navbar from "../Components/Navbar";
import ProductDetail from "../Pages/ProductDetail";
import CreateProduct from "../Pages/CreateProduct";
import Editproduct from '../Pages/Editproduct';
import Category from '../Pages/Category';


const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="category=:category" element={null} />
            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="create-product/" element={<CreateProduct />} />
            <Route path="create-category/" element={<Category />} />
             <Route path="detail/:id/edit" element={<Editproduct />} />
        </Routes>
    </div>
  )
}

export default Routers
