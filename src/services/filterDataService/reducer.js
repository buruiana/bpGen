import * as actionTypes from './actionTypes';

export const initialState = () => ({
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};
