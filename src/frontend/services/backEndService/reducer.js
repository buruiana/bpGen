import * as actionTypes from "../configsService/actionTypes";

export const initialState = () => ({
  error: {},
  code: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.PRETTIFY_CODE_SUCCESS:
      return {
        ...state,
        code: action.code
      };
    case actionTypes.PRETTIFY_CODE_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
