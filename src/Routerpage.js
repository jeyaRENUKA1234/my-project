import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import React from "react";
import Rewardify from "./Login/Rewardify";
import OTPVerification from "./Login/Otpverification";
import NotAvailableStore from "./Login/NotavailableStore";
import SelectList from "./Login/SelectList";
import Dashboard from "./pages/dashBoard";
import OrdersPage from "./pages/Orders";
import ProductsPage from "./pages/myProducts";
import ProfilePage from "./pages/myProfile";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/rewardify" element={<Rewardify />} />
      <Route path="/otp_verification" element={<OTPVerification />} />
      <Route path="/not_available_store" element={<NotAvailableStore />} />
      <Route path="/select_store" element={<SelectList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default RouterPage;
