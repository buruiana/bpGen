import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  forms: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CUSTOM_FORM:
      return {
        ...state,
        forms: action.forms
      };
    default:
      return state;
  }
};
