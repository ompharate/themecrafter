import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Loader from "./Loader";
const PrivateRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded && !isSignedIn) {
    return <Loader />;
  }
  return isSignedIn ? children : <Navigate to="/sign-in" />;
};
export default PrivateRoute;