import * as actionTypes from "./actionTypes";

export const generateCode = () => ({
  type: actionTypes.GENERATE_CODE
});

export const generateCodeSuccess = code => ({
  type: actionTypes.GENERATE_CODE_SUCCESS,
  code
});

export const generateCodeFail = error => ({
  type: actionTypes.GENERATE_CODE_SUCCESS,
  error
});
