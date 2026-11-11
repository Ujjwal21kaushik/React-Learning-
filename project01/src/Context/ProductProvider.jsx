import {createContext, useEffect, useState}from 'react';
import products from "../data/products";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {
  

  const [productdata, setProductdata] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts ? JSON.parse(savedProducts) : products;
  });


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productdata));
  }, [productdata]);

  return (
    <ProductContext.Provider value={{ productdata, setProductdata }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
