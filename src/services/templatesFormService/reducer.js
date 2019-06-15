import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  currentTemplate: {},
  allTemplates: {}
});

export default (state = initialState(), action) => {
  console.log("console: -------------------", action);
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
        allTemplates: action.templates
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
