import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";

const Paymentsuccess = () => {
  useEffect(() => {
    setTimeout(()=>{
        window.location.replace("/profile")
    },3000)
  }, []);
  return (
    <div className="flex justify-center flex-row my-28">
      <div className="w-[40%] flex flex-col items-center justify-center">
        <MdVerified color="blue" size={90} />

        <div>
          <h1 className="text-2xl font-semibold m-2">
            Your payment is successful
          </h1>
        </div>
        <p className="text-center">
          You will be redirected to the profile page in 5 seconds. <br></br>
          Click the button below, if you are not redirected to the website.
        </p>
        <button
          onClick={() => window.location.replace("/profile")}
          className="bg-blue-700 w-40 rounded-lg text-white font-semibold p-3 m-3"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Paymentsuccess;
