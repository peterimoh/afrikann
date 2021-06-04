import React from "react";
import * as actionTypes from "../constants/productConstant";
import { useSelector, useDispatch } from "react-redux";
import URL from '../../constant/url'

import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_REQUEST,
  });
  try {
    axios
    .get(URL)
      .then((res) => { 
        console.log(res)
        dispatch({
          type: actionTypes.GET_PRODUCT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: actionTypes.GET_PRODUCT_FAIL,
          payload: error,
        })
      );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: null,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
  });
  try {
    axios
      .get(`https://afrikan-api.herokuapp.com/${id}`)
      .then((res) => dispatch({
          type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
          payload: error,
        })
      );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};