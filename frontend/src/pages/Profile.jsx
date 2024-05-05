import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const Navigate = useNavigate();
  return (
    <div>
      Profile
      <Link to={"/"}>home</Link>
      <Link to={"/shop"}>shop</Link>
      <Link to={"/Log-in"}>Login</Link>
      <Link to={"/profile"}>profile</Link>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          Navigate("/Log-in");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
