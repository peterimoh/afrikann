import * as actionTypes from "../constants/cartConstant";

export const addToCart = (data, qty) => async (dispatch, getState) => {
  var quautity = 1;
  dispatch({
    type: actionTypes.ADD_TO_CART, 
    payload: {
      product: data.id,
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
