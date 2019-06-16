import * as actionTypes from './actionTypes';

export const initialState = () => ({
  techno: {},
  technos: [],
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_TECHNO:
      return {
        ...state,
        techno: action.techno,
      };
    case actionTypes.SET_ALL_TECHNOS:
      return {
        ...state,
        technos: action.technos,
      };
    case actionTypes.GET_TECHNO:
      return {
        ...state,
        techno: action.techno,
      };
    case actionTypes.GET_ALL_TECHNOS:
      return {
        ...state,
        technos: action.technos,
      };
    case actionTypes.DELETE_TECHNO:
      return {
        ...state,
        techno: action.techno,
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
