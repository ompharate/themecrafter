import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      Shop
      <Link to={"/"}>home</Link>
      <Link to={"/shop"}>shop</Link>
      <Link to={"/Log-in"}>Login</Link>
      <Link to={"/profile"}>profile</Link>
    </div>
  );
};

export default Shop;
