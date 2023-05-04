import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<ProductPage/>} ></Route>
    </Routes>
  );
}

export default Allroutes;
