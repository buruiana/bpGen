import * as actionTypes from './actionTypes';

export const initialState = () => ({
  user: {},
  users: [],
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.FILTER_USERS:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};
