import React, { useContext } from 'react'
import Cards from './Cards'
import {ProductContext} from "../Context/ProductProvider";
import {useSearchParams } from 'react-router-dom';

const Rightsidecontent = () => {
  const {productdata} = useContext(ProductContext);
  // const productdata = JSON.parse(localStorage.getItem("products")) || [];
  const [searchParams] = useSearchParams();

  const categorySlug = searchParams.get("category");
  
  const filteredProducts = categorySlug
    ? productdata.filter(
        (product) =>
          product.category
            .toLowerCase()
            .replace(/'/g, "")
            .replace(/\s+/g, "-") === categorySlug
      )
    : productdata;
  
  
  
  return (
    <div className='w-full h-full'>
      <div className='w-[85%] h-[57px] border-b border-zinc-100 mb-4 fixed top-0 bg-zinc-200 z-2 flex items-center justify-center'>
          <h1 className='text-xl font-semibold'>{categorySlug === null ? "All Category" : categorySlug.toUpperCase()}</h1>
      </div>

      <div className='absolute top-15 w-[85%] h-fit z-1 '>
        <div className='w-[95%] h-full  m-auto my-6 flex items-center justify-center gap-2 flex-wrap '>
          {
            filteredProducts.map((ele) => (

              <Cards  key={ele.id} element={ele}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Rightsidecontent
