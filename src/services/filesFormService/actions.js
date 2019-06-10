import * as actionTypes from "./actionTypes";

export const login = credentials => ({
  type: actionTypes.LOGIN,
  credentials
});

export const loginSuccess = userInfo => ({
  type: actionTypes.LOGIN_SUCCESS,
  userInfo
});

export const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  error
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: actionTypes.LOGOUT_FAILURE,
  error
});
