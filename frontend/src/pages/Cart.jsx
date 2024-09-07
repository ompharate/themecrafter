import React from "react";
import { FaGooglePay } from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../features/cartSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function CartEmpty() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-5">
      <h1 className="text-3xl font-bold">Your cart is empty</h1>
      <Link to="/shop" className="text-blue-700">Go back and shop</Link>
    </div>
  );
}

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
   console.log("cart is ",cart)
  const auth = useUser();
  const originalPrice = cart.reduce(
    (accumulator, product) => accumulator + product.themePrice,
    0
  );


  const taxPrice = parseInt((originalPrice * 5) / 100);
  const savingPrice = parseInt(((originalPrice + taxPrice) * 20) / 100);
  const totalPrice = parseInt(originalPrice - savingPrice);
  console.log(originalPrice, savingPrice);

  const ids = cart.map((product) => {
    return product.id;
  });

  

  const createOrder = async () => {
    const response = await axios.post(
      `${BASE_URL}/api/v1/order/add-order`,
      {     
        userId: auth.user.id,
        products: ids,
        totalPrice: totalPrice,
      },
      {
        withCredentials: true,
      }
    );

    if (response.status == 201) {
      dispatch(clearAllCart());
    }
  };

  const makeOrder = async () => {
    const {
      data: { order },
    } = await axios.post(`${BASE_URL}/api/v1/payment/checkout`, {
      amount: totalPrice,
    });

    const options = {
      key: "rzp_test_nRsfAul0gFmA3M",
      amount: order.amount,
      currency: "INR",
      name: "Themecrafter",
      description: "Tutorial of RazorPay",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmUVRI0eW9Ji_xoi0ItEbWGqxJI66oVDsRA&s",
      order_id: order.id,
      callback_url: `${BASE_URL}/api/v1/payment/payment-verification`,
      prefill: {
        name: auth.user.fullName,
        email: auth.user.primaryEmailAddress.emailAddress,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1a56db",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    createOrder();
  };

  if (cart.length <= 0) {
    return <CartEmpty />;
  }
  console.log(cart)

  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-6">
              {cart?.map((product, index) => (
                <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Link to="#" class="shrink-0 md:order-1">
                      <img
                        class="h-20 w-20 dark:hidden"
                        src={product.themeImage}
                        alt="imac image"
                      />
                      <img
                        class="hidden h-20 w-20 dark:block"
                        src={product.themeImage}
                        alt="imac image"
                      />
                    </Link>

                    <label for="counter-input" class="sr-only">
                      Choose quantity:
                    </label>
                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                      <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900 dark:text-white">
                          ₹{product.themePrice}
                        </p>
                      </div>
                    </div>

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <Link
                        to={`/product/${product.id}`}
                        class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        {product.themeName}
                      </Link>

                      <div class="flex items-center gap-4">
                        <button
                          onClick={() => dispatch(removeCart(product.id))}
                          type="button"
                          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <svg
                            class="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p class="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      ₹{originalPrice}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd class="text-base font-medium text-green-600">
                      -₹{savingPrice} (20%)
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      ₹{taxPrice} (5%)
                    </dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">
                    ₹{totalPrice}
                  </dd>
                </dl>
              </div>

              <Link
                to="#"
                class="flex w-full items-center justify-center rounded-lg border-blue-700 p-2 border bg-primary-700 font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <img onClick={makeOrder} src="/upi.png" />
              </Link>

              <div class="flex items-center justify-center gap-2">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  to="/shop"
                  title=""
                  class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
