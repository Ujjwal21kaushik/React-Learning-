import React from 'react'
import { Route, Routes} from "react-router-dom";
import Navbar from "../Components/Navbar";
import ProductDetail from "../Pages/ProductDetail";
import CreateProduct from "../Pages/CreateProduct";
import Editproduct from '../Pages/Editproduct';


const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="category=:category" element={null} />
            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="create/" element={<CreateProduct />} />
             <Route path="detail/:id/edit" element={<Editproduct />} />
        </Routes>
    </div>
  )
}

export default Routers
