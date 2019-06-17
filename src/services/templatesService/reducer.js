import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  currentTemplate: {},
  templates: []
});

export default (state = initialState(), action) => {
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
    case actionTypes.SET_ALL_TEMPLATES:
      return {
        ...state,
        error: "",
        templates: action.templates
      };
    case actionTypes.SET_TEMPLATE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};