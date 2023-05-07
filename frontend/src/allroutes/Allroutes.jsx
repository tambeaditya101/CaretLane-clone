import React from "react";
import {Home} from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage";  
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Admin from "../pages/Admin";
import SingleProductPage from "../pages/SingleProductPage";

function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Signup />} />
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<ProductPage/>} ></Route>
      <Route path='/product/singleProduct/:productID' element={<SingleProductPage/>} ></Route>
    </Routes>
  );

}

export default Allroutes;
