import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./Login/Login";
import { ToastContainer } from "react-toastify";
import RouterPage from "./Routerpage";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterPage />
    </>
  );
}

export default App;
