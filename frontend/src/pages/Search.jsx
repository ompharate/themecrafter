import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <div className="">
      <div className="flex justify-between p-12 items-center bg-slate-200 shadow-lg">
        <h1 className="text-4xl font-semibold text-[#7747ff]">Search</h1>
        <div className="border-slate-300 w-[70%] border-t-2"></div>
    
      </div>

      <div className=" p-12">
        <div className="flex gap-5">
          <div className="relative rounded-full overflow-hidden bg-white shadow-xl w-[100%] ">
            <input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              name="text"
              placeholder="Search themes..."
              className=" input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
            />
            <div className="absolute right-2 top-[0.4em]">
              <button className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative z-10"
                >
                  <path
                    d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                    fill="white"
                    fill-opacity="0.01"
                  ></path>
                  <path
                    d="M42.8496 18.7067L21.0628 44.6712"
                    stroke="white"
                    stroke-width="3.76603"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                    stroke="white"
                    stroke-width="3.76603"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
     
        <div className="">
          <Products searchKey={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default Search;
