import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  forms: {
    tree: [],
    projectSettings: {},
    currentTemplate: {},
    err: '',
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CUSTOM_FORM:
      return {
        ...state,
        forms: action.forms
      };
    case actionTypes.INIT_PROJECT:
      return {
        ...state,
        forms: {}
      };
    case actionTypes.SET_PROJECT_ERROR:
      return {
        ...state,
        err: action.err
      };
    default:
      return state;
  }
};
