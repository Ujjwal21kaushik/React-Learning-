import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "../Pages/ProductDetail";

const Cards = () => {
  return (
    <div className="w-50 h-fit border border-zinc-300 rounded-2xl overflow-hidden">
      <div className="w-full h-42 bg-black p-2">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1594619273130-2eddf0503a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt=""
        />
      </div>

      <div className="w-full h-full bg-zinc-400 px-3 py-2">
        <div className="w-fit h-fit bg-green-300 rounded-full px-2">
          <span className="text-green-700 font-medium text-xs flex items-center justify-center">
            In Stock
          </span>
        </div>
        <h1 className="text-white font-semibold my-1">Smart Watch</h1>
        <p className="text-zinc-300 leading-4 text-xs">
          Stay connected and track your everyday activities with style.
        </p>
        <div className="flex items-center justify-between my-2 ">
          <h2 className="font-bold text-zinc-100 text-xl">₹2,499</h2>
          <Link
            className="text-black hover:text-blue-600 text-[12px] font-medium"
            to={"/product/1"}
          >
            View Detial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
