import React from "react";
import { Link} from "react-router-dom";

const Cards = ({element}) => {
    
  return (
    <div className="w-50 h-78 border border-zinc-300 rounded-2xl overflow-hidden">
      <div className="w-full h-42 bg-black p-2">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={element.image}
          alt={element.name}
        />
      </div>

      <div className="w-full h-full bg-zinc-400 px-3 py-2">
        <div className="w-fit h-fit  rounded-full ">
          <span className={`${element.stock > 0 ? "text-green-700 bg-green-300 " : "text-red-700 bg-red-100 "} rounded-full px-2 font-medium text-xs flex items-center justify-center`}>
            {element.stock > 0 ?"In stock" : "Out of Stock"}
          </span>
        </div>
        <h1 className="text-white font-semibold my-1">{element.name}</h1>
        <p className="text-zinc-300 leading-4 text-xs">
          {element.description}
        </p>
        <div className="flex items-center justify-between my-2 ">
          <h2 className="font-bold text-zinc-100 text-xl">₹{element.price}</h2>
          <Link
            className="text-black hover:text-blue-600 text-[12px] font-medium"
            to={`detail/${element.id}`}
          >
            View Detial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
