import React from "react";

import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<ProductPage/>} ></Route>
=======
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default Allroutes;
