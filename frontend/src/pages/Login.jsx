import React, { useEffect, useState } from "react";
import axios from "axios";
// import Cookies from "universal-cookie";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const value = `${document.cookie}`;
    console.log(value);
  }, [isLogin]);

  const onSubmit = async () => {
    const response = await axios.post("/api/v1/auth/login", {
      email: "suraj@gmail.com",
      password: "12345678",
    });
    console.log(response.data);
    setIsLogin(true);
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
