import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const { user } = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ["fetchOrders"],
    queryFn: fetchOrders,
  });

  async function fetchOrders() {
    
    const response = await fetch(`${BASE_URL}/api/v1/order/user/${user.id}`);
    const data = await response.json();
    console.log(data);
    return data.orders;
  }

  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full flex justify-center my-5">
        <div class="w-full max-w-xl bg-white border border-gray-200 p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={user.imageUrl}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.fullName}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {user.primaryEmailAddress.emailAddress}
            </span>
            <div class="flex mt-4 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Orders
              </a>

              <a
                href="#"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Favorites
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-5">
        <div class="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Orders
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {!isLoading && data.map((order, index) => (
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    {order?.products?.map((item) => (
                      <>
                        <div class="flex-shrink-0">
                          <img
                            class="w-8 h-8 rounded-full"
                            src={item.imageUrl}
                            alt="Neil image"
                          />
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                      </>
                    ))}

                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      ₹{order.totalPrice}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
