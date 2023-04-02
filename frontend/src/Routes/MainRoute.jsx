import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Admin/Pages/AddProduct";
import Dashboard from "../Admin/Pages/Dashboard";
import Favourites from "../Admin/Pages/Favourites";
import Settings from "../Admin/Pages/Settings";
import Store from "../Admin/Pages/Store";
import { Cart } from "../Pages/Cart/Cart";
import { Address } from "../Pages/Checkout/address";
import { Payment } from "../Pages/Checkout/payment";
import { Home } from "../Pages/Home/Home";
import { AllProduct } from "../Pages/Product/AllProduct";
import UserLogin from "../Pages/Authentication/UserLogin";
import UserSignup from "../Pages/Authentication/UserSignup";
import AdminLogin from "../Pages/Authentication/AdminLogin";
import AdminSignup from "../Pages/Authentication/AdminSignup";
import SingleProductPage from "../Pages/Product/SingleProductPage";
import { OrderSucessful } from "../Pages/Checkout/OrderSucessful";
import { PrivateRoutes } from "./PrivateRoutes";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={
        <PrivateRoutes>
          <Cart />
        </PrivateRoutes>
      
      } />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/checkout/orderSuccesful" element={<OrderSucessful />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/products/:id" element={
        <PrivateRoutes>
      <SingleProductPage />
      </PrivateRoutes>
      } />

      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/adminSignup" element={<AdminSignup />} />

      {/* Admin Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/store" element={<Store />} />
      <Route path="/add-products" element={<AddProduct />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
