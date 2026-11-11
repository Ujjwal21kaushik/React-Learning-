import React from "react";
import { Link, Outlet } from "react-router-dom";
import Rightsidecontent from "./Rightsidecontent";


function Navbar() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  console.log(categories);
  
  return (
    <div className="w-full min-h-screen flex justify-between gap-10">

      <div className="w-[15%] h-full bg-zinc-200 border-r border-white fixed left-0 top-0">

        <div className="w-full mt-4 flex items-center justify-between px-2">
          <Link to="/create-product" className="p-2 text-[14px] bg-green-600 text-zinc-100 font-medium rounded">
            Add Product
          </Link>
          <Link to="/create-category" className="p-2 text-[14px] bg-green-600 text-zinc-100 font-medium rounded" >
            Add Category
          </Link>
        </div>

        <hr className="w-full mt-4 text-zinc-100" />

        <div className="w-full pl-4 mt-4">
          <h1 className="text-xl font-semibold">Category</h1>

          <ul className="my-2 pl-2 space-y-2">

    
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
              <Link to="/">All</Link>
            </li>

       
            {categories.map((category) => (
              <li key={category.id} className="flex items-center gap-2">

                <div className={`w-3 h-3 ${category.color} rounded-full`}></div>

                <Link to={`/?category=${category.slug}`}>
                  {category.name}
                </Link>

              </li>
            ))}

          </ul>
        </div>

      </div>

      <div className="w-[85%] min-h-full ml-[15%]">
        <Rightsidecontent />
        <Outlet />
      </div>

    </div>
  );
}

export default Navbar;