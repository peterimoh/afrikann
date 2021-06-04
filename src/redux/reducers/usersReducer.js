import * as actionTypes from "../constants/usersConstant";

export const userSignInReducer = (state = {  }, action) => {

  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        // state: action.payload,
        userInfo: action.payload
      };

    case actionTypes.USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

