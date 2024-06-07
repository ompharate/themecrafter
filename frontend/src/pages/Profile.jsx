import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUserSlice } from "../features/userSlice";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Loader from "../components/Loader";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const Navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  const fetchOrder = async () => {
    setLoading(true);
    
    const response = await axios.get(
      `${BASE_URL}/api/v1/order/user/${user._id}`,

      {
        withCredentials: true,
      }
    );

  
    setOrders(response.data.orders);
    setLoading(false);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-between p-12 items-center bg-slate-200 shadow-lg">
          <h1 className="text-4xl font-semibold text-[#7747ff]">Profile</h1>
          <div className="border-slate-300 w-[70%] border-t-2"></div>
          <Navbar selectedItem={"profile"} />
        </div>

        <div class="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden  mt-4 ">
          <div class="h-[140px] bg-[#7747ff] "></div>
          <div class="px-5 py-2 flex flex-col gap-3 pb-6">
            <div class="h-[90px] shadow-md shadow-[#7747ff] w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="w-full h-full rounded-full object-center object-cover"
              />
            </div>
            <div class="">
              <h3 class="text-xl text-slate-900 relative font-bold leading-6">
                {user.name}
              </h3>
              <p class="text-sm text-gray-600">{user.email}</p>
            </div>

            <div class="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("user");
                  dispatch(LogoutUserSlice());
                  Navigate("/Log-in");
                }}
                class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Logout
              </button>
            </div>

            <h4 class="text-md font-medium leading-3">Recent orders</h4>
            {loading ? (
              <Loader />
            ) : (
              <div class="flex flex-col gap-3">
                {orders.map((order) => (
                  <>
                    {order.products.map((product) => (
                      <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
                        <BiSolidPurchaseTagAlt />

                        <div class="leading-3">
                          <p class=" text-sm font-bold text-slate-700">
                            <Link to={`/order/${order._id}`}>
                              {" "}
                              {product.name}
                            </Link>
                          </p>
                          <span class="text-xs text-slate-600">
                            {product.createdAt}
                          </span>
                        </div>
                        <p class="text-sm text-slate-500 self-start ml-auto">
                          ₹{product.price}
                        </p>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
