import React from "react";

import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";  
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<ProductPage/>} ></Route>
    </Routes>
  );

}

export default Allroutes;
