import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Loader from "./Loader";
const PrivateRoute = ({ children }) => {
  const { isSignedIn, isLoaded, getToken ,userId} = useAuth();
  if (!isLoaded && !isSignedIn) {
    return <Loader />;
  }
  async function getTokenFromClerk() {
    const token = await getToken();
    console.log(token);
    console.log("user id is",userId)

  }
  getTokenFromClerk();

  return isSignedIn ? children : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
