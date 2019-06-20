import * as actionTypes from './ actionTypes';

export const setGenericForm = forms => ({
  type: actionTypes.SET_GENERIC_FORM,
  forms,
});

export const setGenericFormSuccess = forms => ({
  type: actionTypes.SET_GENERIC_FORM_SUCCESS,
  forms,
});

export const setGenericFormFail = error => ({
  type: actionTypes.SET_GENERIC_FORM_FAIL,
  error,
});
