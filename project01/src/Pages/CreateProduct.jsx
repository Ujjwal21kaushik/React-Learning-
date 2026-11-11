import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import categories from "../data/categories";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const handleCancle =()=>{
    navigate("/")
  }
  const {productdata, setProductdata} = useContext(ProductContext);
  const [formData, setformData] = useState({
    name: "",
    brand: "",
    stock: "",
    image: "",
    color: "",
    price: "",
    size: "",
    description: "",
    category: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setformData({...formData, [name]: value})
  }

 const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      stock: Number(formData.stock),
      size: formData.size
        ? formData.size.split(",").map((s) => s.trim())
        : [],
    };

    setProductdata([...productdata, newProduct]) // use to create new product
    toast.success("Product Created Successfully")
    navigate("/");

  };

  return (
    <div className="w-full h-screen bg-zinc-300 fixed">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] h-fit m-auto mt-12 bg-zinc-100 rounded-2xl p-4"
        action="#"
      >
        <h1 className="text-xl font-semibold text-zinc-600 text-center mt-4 mb-10">
          Add Products
        </h1>

        <div className="flex items-center gap-6">
          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
          </div>

          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="brand"
              name="brand"
              onChange={handleChange}
              placeholder="brand Name"
              required
            />
          </div>

          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500  mb-2"
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              className="w-50 h-8 border px-2 text-sm rounded"
              type="number"
              id="stock"
              name="stock"
              onChange={handleChange}
              placeholder="stock"
              required
            />
          </div>
        </div>

        <div className="col-span-2 my-4">
          <label className="block text-sm font-medium mb-2">
            Product Image URL
          </label>

          <input
            type="url"
            name="image"
            onChange={handleChange}
            placeholder="https://example.com/product.jpg"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="color"
            >
              Color
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="text"
              id="color"
              name="color"
              onChange={handleChange}
              placeholder="Product color"
            />
          </div>

          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="w-60 h-8 border px-2 text-sm rounded"
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              placeholder="brand price"
              required
            />
          </div>

          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500  mb-2"
              htmlFor="size"
            >
              Size
            </label>
            <input
              className="w-50 h-8 border px-2 text-sm rounded"
              type="text"
              id="size"
              name="size"
              onChange={handleChange}
              placeholder="Size with comm (,)"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 mb-4">
          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border rounded"
              name="description"
              onChange={handleChange}
              id="description"
              cols="50"
              rows="5"
            ></textarea>
          </div>

          <div>
            <label
              className="text-[16px] font-medium block text-zinc-500 mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="w-60 h-8 border px-2 text-sm rounded"
              id="category"
              name="category"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>Select Category</option>
              {categories.map((ele, idx) => (
                
                <option value={ele.slug} key={idx}>{ele.name}</option>
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
            Cancle
          </button>

          <button
            className="bg-blue-600 rounded-[6px] px-6 py-2 text-[18px] text-white font-medium border border-zinc-100"
            type="submit"
          >
            Submit
          </button>
        </div>

      </form>

    </div>
  );
};

export default CreateProduct;
