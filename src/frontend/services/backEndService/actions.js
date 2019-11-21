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

export const authenticate = data => ({
  type: actionTypes.AUTHENTICATE,
  data
});

export const register = data => ({
  type: actionTypes.REGISTER,
  data
});

export const create = (dataType, data) => ({
  type: actionTypes.CREATE,
  dataType,
  data
});

export const update = (dataType, data) => ({
  type: actionTypes.UPDATE,
  dataType,
  data
});

export const remove = (dataType, data) => ({
  type: actionTypes.DELETE,
  dataType,
  data
});

export const getCollection = (dataType, data) => ({
  type: actionTypes.GET_COLLECTION,
  dataType,
  data
});

export const exportProjectFiles = data => ({
  type: actionTypes.EXPORT_PROJECT_FILES,
  exported: false,
  data
});