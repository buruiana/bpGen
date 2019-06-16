import * as actionTypes from './actionTypes';

export const initialState = () => ({
  propType: {},
  propTypes: [],
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_TECHNO:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.SET_ALL_TECHNOS:
      return {
        ...state,
        propTypes: action.propTypes,
      };
    case actionTypes.GET_TECHNO:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.GET_ALL_TECHNOS:
      return {
        ...state,
        propTypes: action.propTypes,
      };
    case actionTypes.DELETE_TECHNO:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.FILTER_TECHNOS:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};
