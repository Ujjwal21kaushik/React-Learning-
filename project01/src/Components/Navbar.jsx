import React from "react";
import {Link, Outlet} from "react-router-dom";
import Rightsidecontent from "./Rightsidecontent"
function Navbar() {
  return (
    <div className="w-full min-h-screen flex justify-between gap-10">
        <div className="w-[15%] h-full bg-zinc-200 border-r border-white fixed left-0 top-0">
            <div className="w-fit mt-4 m-auto">
                <a className="px-4 py-2 bg-green-600 text-zinc-100 font-medium rounded" href="#">Add product</a>
            </div>
            <hr className="w-full mt-4 text-zinc-100 "/>

            <div className="w-full pl-4 mt-4">
                <h1 className="text-xl font-semibold">Category</h1>

                <ul className="my-2 pl-2">
                    <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                        <Link to={"/"}>All</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                        <Link to={"/mens-wear"}>Men's Wear</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                        <Link to={"/makeup"}>Makeup</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                        <Link to={"/accessories"}>Accessories</Link>
                    </li>
                </ul>
            </div>


        </div>

        <div className="w-[85%] min-h-full ml-[15%]">
            <Rightsidecontent />

            <Outlet />
        </div>
    </div>
  )
}

export default Navbar;
