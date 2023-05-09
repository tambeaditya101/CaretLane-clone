import React from "react";
import {Home} from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage";  
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Admin from "../pages/Admin";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import Payment from "../pages/Payment";


import { PrivateRoute } from "./PrivateRoute";
import AdminLogin from "../pages/AdminLogin";


function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Signup />} />
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<ProductPage/>} ></Route>

      <Route path='/product/singleProduct/:productID' element={<SingleProductPage/>} ></Route>
      <Route path='/cart' element={<CartPage/>} ></Route>
      <Route path='/payment' element={<Payment/>} ></Route>
     

      <Route path='/product/singleProduct/:productID' element={<SingleProductPage/>}></Route>
      <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>} ></Route>
      <Route path='/paymentpage' element={<PrivateRoute><Payment/></PrivateRoute>}  ></Route>

    </Routes>
  );

}

export default Allroutes;
