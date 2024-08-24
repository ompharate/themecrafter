import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails.jsx";
import Search from "./pages/Search.jsx";
import Cart from "./pages/Cart.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import Paymentsuccess from "./pages/Paymentsuccess.jsx";
import Contact from "./pages/Contact.jsx";

import Alert from "./components/Alert.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications } from "./features/cartSlice.js";
import { clearUserNotifications } from "./features/userSlice.js";
import Navbar from "./components/Navbar.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (cart.message || user.message) {
    setTimeout(() => {
      dispatch(clearNotifications());
      dispatch(clearUserNotifications());
    }, 2000);
  }

  return (
    <BrowserRouter>
      <Navbar />
      {cart.message || user.message ? (
        <Alert message={cart.message || user.message} />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="shop"
          element={
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="product/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="order/:id"
          element={
            <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
        <Route path="admin" element={<AdminLogin />}/>
        <Route path="admin/dashboard" element={<AdminDashboard />}/>
        <Route path="paymentsuccess" element={<Paymentsuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
