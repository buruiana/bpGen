import * as actionTypes from "./actionTypes";

export const prettifyCode = code => ({
  type: actionTypes.PRETTIFY_CODE,
  code
});

export const prettifyCodeSuccess = code => ({
  type: actionTypes.PRETTIFY_CODE_SUCCESS,
  code
});

export const prettifyCodeFail = error => ({
  type: actionTypes.PRETTIFY_CODE_FAIL,
  error
});

export const exportModules = data => ({
  type: actionTypes.EXPORT_MODULES,
  data
});