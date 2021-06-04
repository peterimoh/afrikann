import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTiils, composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { cartReducer } from './reducers/cartReducers'
import { getProductReducer, getProductDetailsReducer, } from './reducers/productReducer'
import { userSignInReducer } from './reducers/usersReducer';
const reducers = combineReducers({
    cart: cartReducer,
    getProduct: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    userSignIn: userSignInReducer
})

const middleware = { thunk };

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const userSignIn = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
const INITIAL_CART_STATE = {
    cart:{ cartItems: cartFromLocalStorage },
    userSignIn: { userInfo:  userSignIn}
}
const store = createStore(
    reducers, 
    INITIAL_CART_STATE,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;