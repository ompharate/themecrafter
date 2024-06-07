import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";

const Paymentsuccess = () => {
    useEffect(()=>{

        setTimeout(()=>{
            window.location.replace("/profile")
        },5000)

    },[])
  return (
    <div className="bg-green-400 flex justify-center flex-row h-[100vh]">
      <div className="w-[40%] flex flex-col items-center justify-center">
        <MdVerified color="white" size={90} />

        <div>
          <h1 className="text-2xl font-semibold m-2">Your payment is successful</h1>
        </div>
        <p className="text-center">
          You will be logged out of all the devices except this one. <br></br> You will be
          redirected to the website in 5 seconds. <br></br>Click the button below, if you
          are not redirected to the website.
        </p>
        <button onClick={()=>window.location.replace("/profile")} className="bg-[#7747ff] w-40 rounded-sm text-white font-semibold p-3 m-3">Profile</button>
      </div>
    </div>
  );
};

export default Paymentsuccess;
