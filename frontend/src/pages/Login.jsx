import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginUserSlice } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {      
      dispatch(LoginUserSlice(JSON.parse(user)));     
      navigate("/shop"); 
    }
  },[]);
  const onSubmit = async () => {
    const response = await axios.post("/api/v1/auth/login", {
      email: "suraj@gmail.com",
      password: "12345678",
    });
    dispatch(LoginUserSlice(response.data.profile));
    localStorage.setItem("user", JSON.stringify(response.data.profile));
    navigate("/shop");
  };
  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

export default Login;
