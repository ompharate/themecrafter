import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { VscPreview } from "react-icons/vsc";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../components/Loader";
const OrderDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/v1/order/${id}`, {
        withCredentials: true,
      });

      setProducts(response.data.data[0].products);
      setLoading(false);
    };
    getOrder();
    setLoading(false);
  }, []);

  return (
    <div className="">
      <div className="flex justify-between p-12 items-center bg-slate-200 shadow-lg">
        <h1 className="text-4xl font-semibold text-[#7747ff]">Order Details</h1>
        <div className="border-slate-300 w-[70%] border-t-2"></div>
        <Navbar />
      </div>
      {loading ? (
        <div className="flex justify-center flex-row  items-center h-[50vh]">
          <Loader />
        </div>
      ) : (
        <>
          {products.length <= 0 ? <div className="text-3xl text-center font-semibold my-5 text-red-500">No Orders found</div> : null}
          {products.map((product) => (
            <div className="flex justify-center  rounded-sm">
              <div className="flex justify-between w-[100%] p-12">
                <div className="">
                  <img width={800} height={600} src={product.imageUrl} />
                </div>
                <div className="shadow-xl">
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
                        onClick={() =>
                          window.open(product.downloadUrl, "_self")
                        }
                        className="bg-[#7747ff] p-3 rounded-sm text-white font-semibold hover:bg-transparent hover:border-2 hover:border-black hover:text-black flex items-center gap-2 justify-center"
                      >
                        <FaCloudDownloadAlt />
                        Download
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
          ))}
        </>
      )}
    </div>
  );
};

export default OrderDetails;
