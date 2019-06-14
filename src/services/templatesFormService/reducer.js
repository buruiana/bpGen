import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  currentTemplate: {},
  allTemplates: {}
});

export default (state = initialState(), action) => {
  console.log("console: -------------------", action);
  switch (action.type) {
    case actionTypes.SET_TEMPLATE:
      return {
        ...state,
        error: ""
      };
    case actionTypes.SET_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: "",
        currentTemplate: action.template
      };
    case actionTypes.SET_TEMPLATE_FAILURE:
      return {
        ...state,
        error: action.error
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
