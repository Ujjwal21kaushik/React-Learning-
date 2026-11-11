
import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import categories from "../data/categories";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Editproduct = () => {
  const { productdata, setProductdata } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const product = productdata.find(
    (item) => item.id === Number(id)
  );

  const [formData, setformData] = useState(() => ({
    ...product,
    size: product?.size?.join(", ") || "",
  }));

  const handleCancle = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({...formData, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...formData,
      id: Number(id),
      price: Number(formData.price),
      stock: Number(formData.stock),
      size: formData.size
        ? formData.size.split(",").map((s) => s.trim())
        : [],
    };

    const updatedProducts = productdata.map((item) =>  // this is done so that no new product created edit in existing one only
      item.id === Number(id) ? updatedProduct : item
    );

    setProductdata(updatedProducts);

    toast.success("Product Edited Successfully");
    navigate("/");
  };

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="w-full h-screen bg-zinc-300 fixed">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] h-fit m-auto mt-12 bg-zinc-100 rounded-2xl p-4"
      >
        <h1 className="text-xl font-semibold text-zinc-600 text-center mt-4 mb-10">
          Edit Products
        </h1>

        <div className="flex items-center gap-6">
          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="brand">
              Brand
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="brand"
              name="brand"
              value={formData.brand || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="stock">
              Stock
            </label>
            <input
              className="w-50 h-8 border px-2 text-sm rounded"
              type="number"
              id="stock"
              name="stock"
              value={formData.stock ?? ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-sm font-medium mb-2" htmlFor="image">
            Product Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="color">
              Color
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="color"
              name="color"
              value={formData.color || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="number"
              id="price"
              name="price"
              value={formData.price ?? ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="size">
              Size
            </label>
            <input
              className="w-50 h-8 border px-2 text-sm rounded"
              type="text"
              id="size"
              name="size"
              value={formData.size || ""}
              onChange={handleChange}
              placeholder="S, M, L"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="border rounded"
              name="description"
              id="description"
              value={formData.description || ""}
              onChange={handleChange}
              cols="50"
              rows="5"
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-zinc-500 mb-2" htmlFor="category">
              Category
            </label>
            <select
              className="w-60 h-8 border px-2 text-sm rounded"
              id="category"
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
            >
              <option value="" disabled>Select Category</option>
              {categories.map((ele) => (
                <option value={ele.name} key={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-[30%] h-12 flex items-center gap-4 mt-10 mb-2 m-auto">
          <button
            onClick={handleCancle}
            className="bg-zinc-200 rounded-[6px] px-6 py-2 text-[18px] font-medium border border-zinc-100"
            type="button"
          >
            Cancel
          </button>

          <button
            className="bg-blue-600 rounded-[6px] px-6 py-2 text-[18px] text-white font-medium border border-zinc-100"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editproduct;
