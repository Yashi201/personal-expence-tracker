import React from "react";
import "./App.css";
import "reactjs-popup/dist/index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Homemain from "./Component/Home/Homemain";
import Login from "./Component/Account/Login";
import Register from "./Component/Account/Register";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Header/Footer";
import IncomeDashboard from "./Component/Reusable/IncExpBord/IncomeDashboard";
import ExpencesDashBoard from "./Component/Reusable/IncExpBord/ExpencesDashBoard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<IncomeDashboard />} />
        <Route path="/expences" element={<ExpencesDashBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
