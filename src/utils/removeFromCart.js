import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";


const RemoveFromCartHandler=(useDispatch)=>{
    let dispatch = useDispatch()
    const removeFromCat=(id)=>{
        dispatch(removeFromCart(id));
      }

    return removeFromCat
}

export default RemoveFromCartHandler;