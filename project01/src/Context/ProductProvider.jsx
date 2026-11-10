import React, {createContext, useState}from 'react';
import products from "../data/products";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [productdata, setProductdata] = useState(products);

  return (
    <ProductContext.Provider value={{ productdata, setProductdata }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
