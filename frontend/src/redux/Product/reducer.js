import React from 'react'
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from './actionType'

const initialState = {
    data : [],
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
  switch(type){
    case PRODUCT_REQUEST:
        return {...state , isLoading:true}
    case PRODUCT_FAILURE:
        return {...state , isLoading:false,isError:true}
    case PRODUCT_SUCCESS :
        return {...state , isLoading:false , data:[...payload]}
    default : return state 
  }
}

export default reducer