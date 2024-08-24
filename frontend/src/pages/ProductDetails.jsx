import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import axios from "axios";
import { FaCartShopping } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cartSlice";
import Loader from "../components/Loader";

const productDetails = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const product = await axios.get(
        `${BASE_URL}/api/v1/product/detail/${id}`,
        {
          withCredentials: true,
        }
      );
      setProduct(product.data.product);
      setLoading(false);
    };
    getProduct();
  }, []);
  
  return (
    <div className="">
      <div className="flex justify-between p-12 items-center bg-slate-200 shadow-lg">
        <h1 className="text-4xl font-semibold text-[#7747ff]">
          {product.name}
        </h1>
        <div className="border-slate-300 w-[70%] border-t-2"></div>
     
      </div>
      {loading ? (
        <div className="flex justify-center flex-row  items-center h-[50vh]">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center  rounded-sm ">
      
          <div className="flex justify-between w-[100%] p-12">
            <div className="">
              <img width={800} height={600} src={product.imageUrl} />
            </div>
            <div className="shadow-lg">
              <img
                className="cursor-pointer"
                width={450}
                height={450}
                src={product.imageUrl}
              />
              <div className="">
                <div className="p-3 flex gap-2">
                  {product?.tags?.map((tag, index) => (
                    <span
                      className="bg-yellow-600 text-wrap text-white  text-sm font-semibold p-2 rounded-full cursor-pointer"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-evenly flex-col p-2 gap-2 ">
                  <button
                    onClick={() => dispatch(addCart(product))}
                    className="bg-[#7747ff] p-3 rounded-sm text-white font-semibold hover:bg-transparent hover:border-2 hover:border-black hover:text-black flex items-center gap-2 justify-center"
                  >
                    <FaCartShopping size={25} /> Cart
                  </button>

                  <button className="bg-[#7747ff] p-3 rounded-sm text-white font-semibold hover:bg-transparent hover:border-2 hover:border-black hover:text-black flex items-center gap-2 justify-center">
                    <FaGooglePay size={50} /> ₹{product.price}
                  </button>
                  <button
                    onClick={() => window.open(product.demoUrl, "_blank")}
                    className="bg-[#7747ff] p-3 rounded-sm text-white font-semibold hover:bg-transparent hover:border-2 hover:border-black hover:text-black flex items-center gap-2 justify-center"
                  >
                    <VscPreview size={30} />
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-14">
        <div>
          <h1 className="text-3xl font-semibold"> {product.name}</h1>
        </div>
        <h3>{product.description}</h3>
      </div>
    </div>
  );
};

export default productDetails;
