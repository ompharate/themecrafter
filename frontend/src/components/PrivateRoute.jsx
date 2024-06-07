import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginUserSlice } from "../features/userSlice";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(LoginUserSlice(JSON.parse(user)));
    }
    setCheckingLogin(false);
  }, [dispatch]);

  if (checkingLogin) {
    return null;
  }

  return isLogin ? children : <Navigate to="/Log-in" />;
};

export default PrivateRoute;
