import * as actionTypes from "./actionTypes";

export const setCustomForm = forms => ({
  type: actionTypes.SET_CUSTOM_FORM,
  forms
});

export const initProject = () => ({
  type: actionTypes.INIT_PROJECT,
  exported: false
});

export const setProjectError = err => ({
  type: actionTypes.SET_PROJECT_ERROR,
  err
});

