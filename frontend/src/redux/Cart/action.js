
import axios from 'axios'
import { CART_PRODUCT_FAILURE, CART_PRODUCT_REQUEST, CART_PRODUCT_SUCCESS } from './actionType'



export const getCartData = (dispatch)=>{
  dispatch({type:CART_PRODUCT_REQUEST})
  axios.get(`${process.env.REACT_APP_BASE_URL}/cart/products`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  .then((res)=>dispatch({type:CART_PRODUCT_SUCCESS,payload:res.data}))
  .catch((err)=>{dispatch({type:CART_PRODUCT_FAILURE})})
}




export const deleteCartItem = (id)=>{
  return axios.delete(`${process.env.REACT_APP_BASE_URL}/cart/product/remove/${id}`,
  {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}}).then((res)=>{}).catch((err)=>console.log(err))
}

export const updateQuantity = (value,id)=>{
  const data = {
    product_qty : value
  }
  return axios.patch(`${process.env.REACT_APP_BASE_URL}/cart//product/update/${id}`,data,
        {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}}
  )
}