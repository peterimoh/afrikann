import axios from 'axios';
import * as actionTypes from "../constants/usersConstant"

export const signin = (email, password)=> async (dispatch)=>{
    dispatch({
        type: actionTypes.USER_SIGNIN_REQUEST,
        payload: {
            email, password
        }
    })
    
    try {
        const { data } = await axios.post('/signin', { email, password });
        dispatch({
            type: actionTypes.USER_SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: error.message
        })
        
    }
}