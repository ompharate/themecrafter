import React from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const Contact = () => {
  return (
    <div className=" w-full h-[100vh]">
      <div className="flex justify-center w-full">
        <div class="w-full max-w-[600px] bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

          <form
            class="flex flex-col"
            onSubmit={() => {
              alert("form submitted successfully");
            }}
          >
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Name"
              required={true}
            />
            <input
              type="email"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email"
              required
            />
            <input
              type="number"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              rows={7}
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Message"
              required
            ></textarea>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
