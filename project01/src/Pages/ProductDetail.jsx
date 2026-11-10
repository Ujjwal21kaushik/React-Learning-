import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { ProductContext } from "../Context/ProductProvider";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // return object
  const { productdata, setProductdata } = useContext(ProductContext);
  const product = productdata.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40">
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Product not found!</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  const deleteProduct = () => {
    const updatedProducts = productdata.filter(
      (item) => item.id !== Number(id),
    );

    if(!window.confirm('Are you sure you want to delete this product')) return navigate("/");
     
    setProductdata(updatedProducts);
    toast.success("Deleted Succesfully")
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl relative overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="h-72 bg-zinc-100 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-xs ${product.stock > 0 ? "text-green-700 bg-green-100 " : "text-red-700 bg-red-100 "}rounded-full px-3 py-1 w-fit`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>

            <p className="text-sm text-zinc-500 mt-3">{product.brand}</p>

            <h1 className="text-2xl font-bold mt-1">{product.name}</h1>

            <h2 className="text-2xl font-bold mt-3">₹{product.price}</h2>

            <p className="text-sm text-zinc-500 mt-3 leading-6">
              {product.description}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <p className="text-[16px] font-semibold">Color:</p>
              <p className="text-sm text-zinc-500">{product.color}</p>
            </div>

            {product.size && product.size.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2">Available Sizes</p>

                <div className="flex gap-2 flex-wrap">
                  {product.size.map((size) => (
                    <span
                      key={size}
                      className="border border-zinc-300 rounded-lg px-3 py-1 text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-zinc-200 p-5 flex justify-end gap-3">
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Edit
          </button>

          <button
            onClick={deleteProduct}
            className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
