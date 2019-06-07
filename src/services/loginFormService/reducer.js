import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  isAuthenticated: false,
  userInfo: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: "",
        userInfo: action.userInfo
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        userInfo: {}
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        error: "",
        isAuthenticated: false,
        userInfo: {}
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        userInfo: {}
      };
    default:
      return state;
  }
};
