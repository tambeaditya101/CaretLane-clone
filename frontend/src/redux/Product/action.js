
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"
import axios from 'axios'

export const getProducts = (obj)=> (dispatch) =>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${process.env.REACT_APP_BASE_URL}/products`,obj)
    .then((res)=>dispatch({type:PRODUCT_SUCCESS , payload : res.data}))
    .catch((err)=>dispatch({type:PRODUCT_FAILURE}))
}