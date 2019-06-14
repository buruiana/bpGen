import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  code: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.GENERATE_CODE:
      return {
        ...state,
        error: ""
      };
    case actionTypes.GENERATE_CODE_SUCCESS:
      return {
        ...state,
        error: "",
        code: action.code
      };
    case actionTypes.GENERATE_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        code: []
      };
    default:
      return state;
  }
};
