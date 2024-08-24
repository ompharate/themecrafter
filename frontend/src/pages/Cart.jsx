import React from "react";
import Navbar from "../components/Navbar";
import { FaGooglePay } from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearAllCart, removeCart } from "../features/cartSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const totalPrice = cart.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  const ids = cart.map((product) => {
    return product._id;
  });

  const createOrder = async () => {
    const response = await axios.post(
      `${BASE_URL}/api/v1/order/add-order`,
      {
        userId: user._id,
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
      callback_url: `${BASE_URL}/api/v1/payment/paymentverification`,
      prefill: {
        name: user.name,
        email: user.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    createOrder();
  };
  return (
    <div className="">
      <div className="flex justify-between p-12 items-center bg-slate-200 ">
        <h1 className="text-4xl font-semibold text-[#7747ff]">Cart</h1>
        <div className="border-slate-300 w-[70%] border-t-2"></div>
      
      </div>

      {cart.length <= 0 ? (
        <div className="text-center mt-10">
          <h1 className="text-2xl">Cart is empty</h1>
        </div>
      ) : (
        <div className=" flex justify-evenly flex-row gap-4 items-center rounded-sm flex-wrap">
          <div className="my-4 flex justify-center flex-col gap-4 items-center  rounded-sm  flex-wrap">
            {cart.map((product) => (
              <div className="flex gap-7">
                <div className="w-[70%]">
                  <div className="font-semibold">{product.name}</div>

                  <img width={300} height={400} src={product.imageUrl}></img>

                  <div>
                    <h2 className="font-semibold">{product.price}</h2>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Fill
                    className="cursor-pointer"
                    onClick={() => dispatch(removeCart(product._id))}
                    size={30}
                    color="red"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-col bg-slate-300 p-10 rounded-md">
            <div>
              <h1 className="text-2xl">Themecrafter</h1>
            </div>
            <div className="border-white w-[100%] border-t-2"></div>
            <div className="flex flex-col">
              {cart.map((product) => (
                <div className="flex gap-3">
                  <div className="font-bold">{product.name}</div>
                  <div className="font-semibold">₹{product.price}</div>
                </div>
              ))}
            </div>
            <div className="border-white w-[100%] border-t-2"></div>
            <div>
              <h2 className="font-bold">Total: ₹{totalPrice}</h2>
            </div>
            <div className="border-white w-[100%] border-t-2"></div>
            <button
              onClick={(e) => makeOrder()}
              className="bg-[#7747ff] w-40 rounded-sm text-white font-semibold hover:bg-transparent hover:border-2 hover:border-black hover:text-black flex items-center gap-2 justify-center"
            >
              <FaGooglePay size={50} /> ₹{totalPrice}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
