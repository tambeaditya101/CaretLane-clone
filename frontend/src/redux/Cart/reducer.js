import { CART_PRODUCT_FAILURE, CART_PRODUCT_REQUEST, CART_PRODUCT_SUCCESS } from "./actionType"


const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case CART_PRODUCT_REQUEST:
        return {...state , isLoading:true}
    case CART_PRODUCT_FAILURE:
        return {...state , isLoading:false,isError:true}
    case CART_PRODUCT_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer