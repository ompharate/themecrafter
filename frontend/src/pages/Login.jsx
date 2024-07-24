import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginUserSlice } from "../features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(LoginUserSlice(JSON.parse(user)));
      navigate("/shop");
    }
  }, []);
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(LoginUserSlice(response.data.profile.user));
      localStorage.setItem("user", JSON.stringify(response.data.profile));
      navigate("/shop");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[#7747ff]">
      <div className="max-w-2xl relative flex flex-col p-10 rounded-md text-black bg-white">
        <div className="text-4xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">Themecrafter</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-13 m-0 p-[18px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          ></input>
        </div>
        <div className="py-2 px-2">
          <p className="text-red-400">
            {error
              ? "Username and password does not match an account in our system. Please"
              : null}
          </p>
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-8 py-4 rounded text-white text-base font-normal"
        >
          Login
        </button>

        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link className="text-sm text-[#7747ff]" to={"/sign-up"}>
            {" "}
            Sign up for free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
