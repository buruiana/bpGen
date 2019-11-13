import * as actionTypes from './actionTypes';

export const initialState = () => ({
  propType: {},
  propTypes: [],
  searchData: {},
  tree: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROP_TYPE:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.SET_ALL_PROP_TYPES:
      return {
        ...state,
        propTypes: action.propTypes,
      };
    case actionTypes.GET_PROP_TYPE:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.GET_ALL_PROP_TYPES:
      return {
        ...state,
        propTypes: action.propTypes,
      };
    case actionTypes.DELETE_PROP_TYPE:
      return {
        ...state,
        propType: action.propType,
      };
    case actionTypes.FILTER_PROP_TYPES:
      return {
        ...state,
        searchData: action.searchData,
      };
    case actionTypes.SET_PROP_TYPE_TREE:
      return {
        ...state,
        tree: action.tree,
      };
    default:
      return state;
  }
};
