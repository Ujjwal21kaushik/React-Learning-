import React, { useState } from "react";
import oldcategories from "../data/categories";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const navigate = useNavigate();

    const [categories, setcategories] = useState(() => {
        return JSON.parse(localStorage.getItem("categories")) || oldcategories;
    });

    const [category, setcategory] = useState({

        name:"",
        slug: "",
        color: ""
    })

    const handleChange =(e)=>{
        const {name, value} = e.target
        setcategory({...category, [name]:value})

    }

    const handleSubmit =(e)=>{
        e.preventDefault();   
        
        const newCategory = {
            ...category,
            id: Date.now(),
            color: category.color || "bg-zinc-600"
        }

        const addCategory = [...categories, newCategory];
        setcategories(addCategory);

        localStorage.setItem("categories", JSON.stringify(addCategory));
          setcategory({
            name: "",
            slug: "",
            color: "",
        });
        navigate("/")
    }

  return (
    <div className="w-full min-h-screen bg-zinc-200 p-8">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] h-fit mx-auto mt-12 bg-white rounded-2xl p-6 shadow-md"
      >
        <h1 className="text-xl font-semibold text-zinc-700 text-center mb-8">
          Add New Category
        </h1>


        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-600 mb-2"
          >
            Category Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Enter category name"
            className="w-full h-10 border border-zinc-300 rounded-lg px-3 outline-none focus:border-blue-500"
            required
          />
        </div>

  
        <div className="mb-5">
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-zinc-600 mb-2"
          >
            Category Slug
          </label>

          <input
            type="text"
            id="slug"
            name="slug"
            value={category.slug}
            onChange={handleChange}
            placeholder="e.g. mens-wear"
            className="w-full h-10 border border-zinc-300 rounded-lg px-3 outline-none focus:border-blue-500"
            required
          />
        </div>

     
        <div className="mb-8">
          <label
            htmlFor="color"
            className="block text-sm font-medium text-zinc-600 mb-2"
          >
            Category Color
          </label>

          <input
            type="text"
            id="color"
            name="color"
            value={category.color}
            onChange={handleChange}
            placeholder="e.g. bg-blue-300"
            className="w-full h-10 border border-zinc-300 rounded-lg px-3 outline-none focus:border-blue-500"
            required
          />
        </div>

 
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg bg-zinc-200 text-zinc-700 font-medium"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
