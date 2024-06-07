import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" w-full h-[100vh]">
      <div className="flex  p-5 justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold cursor-pointer">
            <Link to={"/"}>OpThemeStore</Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-4 cursor-pointer font-semibold items-center flex-row ">
            <li className="hover:border-b-2 border-[#7747ff] ">
              <Link to={"/Log-in"}>Login</Link>
            </li>
            <li className="hover:border-b-2 border-[#7747ff] ">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="hover:border-b-2 border-[#7747ff] ">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div class="w-full max-w-[600px] bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

          <form class="flex flex-col" >
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Name"
            />
            <input
              type="email"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email"
            />
            <input
              type="number"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Phone Number"
            />

            <textarea
              name="message"
              rows={7}
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              class="bg-[#7747ff] text-white font-bold py-2 px-4 rounded-md mt-4  transition ease-in-out duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
