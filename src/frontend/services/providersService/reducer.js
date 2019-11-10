import * as actionTypes from './actionTypes';

export const initialState = () => ({
  provider: {},
  providers: [],
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      };
    case actionTypes.SET_ALL_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    case actionTypes.GET_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      };
    case actionTypes.GET_ALL_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    case actionTypes.DELETE_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      };
    case actionTypes.FILTER_PROVIDERS:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};
