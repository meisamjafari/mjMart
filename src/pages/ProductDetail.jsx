import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import productData from "../data/productData";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { getProductById } from "../services/productService";

export default function ProductDetail() {
  const { cartItems, increase, decrese } = useContext(ShoppingCartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally details");
      }
    };

    fetchData(id);
  }, [id]);

  // const product = productData.find((item) => item.id === Number(id));
  let currentItem = cartItems.find((item) => item.id == id);

  return (

   <div className="container mx-auto my-10">
     <div className=" flex gap-20 pb-10 border-b-1 border-slate-400">
      <div className="w-1/4">
        <img src={`${product.images}`} alt={`${product.title}`} />
      </div>
      <div className="w-4/5 flex flex-col items-start gap-20 justify-center ">
        <span className="text-3xl">{product.title}</span>
        <span className="text-2xl">قیمت: {product.price}</span>

        {!currentItem || currentItem?.qty < 1 ? (
          <button
            onClick={() => increase(id)}
            className="bg-red-500 text-white p-3 text-2xl cursor-pointer hover:bg-red-600 transition-all"
          >
            افزودن به سبد
          </button>
        ) : (
          <div className=" flex flex-col items-center gap-8">
            <div className="flex text-lg text-white">
              <button
                onClick={() => decrese(id)}
                className="py-3  px-10 hover:bg-red-600 bg-red-500 transition-all cursor-pointer"
              >
                -
              </button>
              <span className="py-3  px-10 text-black ">
                {" "}
                {currentItem != null ? currentItem.qty : ""}
              </span>
              <button
                onClick={() => increase(id)}
                className="py-3  px-10 hover:bg-green-600  bg-green-500 transition-all cursor-pointer"
              >
                +
              </button>
            </div>
            <div>
              <span className="border-1 p-3 cursor-pointer text-slate-400 hover:text-slate-700 transition-all">
                <Link to={"/Cart"}> رفتن به سبد خرید</Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="mt-4">
      <h2 className="text-2xl py-8">توضیحات</h2>
      <div className="text-lg">
        {product.description}
      </div>
    </div>
   </div>
  );
}
