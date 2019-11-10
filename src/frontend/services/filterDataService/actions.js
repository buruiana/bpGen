import * as actionTypes from './actionTypes';

export const setFilter = searchData => ({
  type: actionTypes.SET_FILTER,
  searchData,
});
