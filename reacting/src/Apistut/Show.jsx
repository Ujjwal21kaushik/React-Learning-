import React, {useEffect, useState} from "react";
import axios from "../utils/axios";

export default function Show() {

  const [product, setProduct] = useState([]);

  const getProduct = () => {
    // const apis = "https://fakestoreapi.com/products";

    axios
      .get("/products")
      .then((product) => {
        // console.log(product);
        setProduct(product.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getProduct();
  },[])

  return (
    <>
      {/* <button
        className="px-3 py-1 bg-blue-600 rounded-md cursor-pointer mb-4"
        onClick={getProduct}
        type="button"
      >
        Get Product
      </button> */}

      <hr />

      <div className="w-full max-h-120 overflow-auto ">
        <ul className="bg-yellow-600/80 w-full px-4 py-2">
          {product.length > 0 ? (
            product.map((prod, idx) => (
              <li key={idx} className="bg-yellow-200 mb-3 p-2 rounded">
                {" "}
                {prod.title}
              </li>
            ))
          ) : (
            <h1>Loading..</h1>
          )}

        </ul>
      </div>
    </>
  );
}
