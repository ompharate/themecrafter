import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Shop = () => {
  const [searchKey, setSearchKey] = useState(null)
  return (
    <div className="">
      <div className="flex justify-between p-12 items-center bg-slate-200 shadow-lg">
        <h1 className="text-4xl font-semibold text-[#7747ff]" >Shop</h1>
        <div className="border-slate-300 w-[70%] border-t-2"></div>
        <Navbar selectedItem={"shop"} />
      </div>

      <div className=" p-12">
        <div className="flex flex-wrap gap-5">
          <span onClick={()=>setSearchKey("null")} className="bg-black text-white font-semibold p-2 rounded-full cursor-pointer">
            All
          </span>
          <span onClick={()=>setSearchKey("food")}  className="bg-blue-500 text-white font-semibold p-2 rounded-full cursor-pointer">
            ecommerce
          </span>
          <span  onClick={()=>setSearchKey("food")}  className="bg-red-500 text-white font-semibold p-2 rounded-full cursor-pointer">
            store
          </span>
          <span onClick={()=>setSearchKey("landing page")} className="bg-yellow-600 text-white font-semibold p-2 rounded-full cursor-pointer">
            landing page
          </span>
          <span  onClick={()=>setSearchKey("saas")} className="bg-green-600 text-white font-semibold p-2 rounded-full cursor-pointer">
            saas
          </span>
          <span  onClick={()=>setSearchKey("freelancing")} className="bg-gray-600 text-white font-semibold p-2 rounded-full cursor-pointer">
            Job
          </span>
        </div>

        <div className="">
          <Products searchKey={searchKey} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
