import * as actionTypes from './actionTypes';

export const initialState = () => ({
  forms: [],
  error: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_GENERIC_FORM_SUCCESS:
      return {
        ...state,
        forms: action.forms,
      };
    case actionTypes.SET_GENERIC_FORM_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
