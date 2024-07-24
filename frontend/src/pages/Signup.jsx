import React, {  useLayoutEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginUserSlice } from "../features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(LoginUserSlice(JSON.parse(user)));
      navigate("/shop");
    }
  }, []);
  const onSubmit = async () => {
    if(!name || !email || !password) {
      return;
    }
    const response = await axios.post(`${BASE_URL}/api/v1/auth/register`, {
      name:name,
      email:email,
      password: password,
    });
    
    navigate("/Log-in");
 
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[#7747ff]">
 
      <div className="max-w-2xl relative flex flex-col p-10 rounded-md text-black bg-white">
        <div className="text-4xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome to <span className="text-[#7747ff]">Themecrafter</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Sign-up to continue
        </div>
    
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-base leading-[140%] font-normal mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="rounded border border-gray-200 text-base w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-13 m-0 p-[18px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            ></input>
          </div>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-base leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="rounded border border-gray-200 text-base w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-13 m-0 p-[18px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            ></input>
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-13 m-0 p-[18px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            ></input>
          </div>
         
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-[#7747ff] w-max m-auto px-8 py-4 rounded text-white text-base font-normal"
          >
            Register
          </button>
      
        <div className="text-sm text-center mt-[1.6rem]">
         Already have an account?{" "}
       
            <Link className="text-sm text-[#7747ff]" to={"/Log-in"}> Login!</Link>
       
        </div>
      </div>
    </div>
  );
};

export default Signup;
