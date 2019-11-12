import * as actionTypes from './actionTypes';

export const setUser = user => ({
  type: actionTypes.SET_USER,
  user,
});

export const setAllUsers = users => ({
  type: actionTypes.SET_ALL_USERS,
  users,
});

export const getUser = user => ({
  type: actionTypes.GET_USER,
  user,
});

export const getAllUsers = users => ({
  type: actionTypes.GET_ALL_USERS,
  users,
});

export const deleteUser = user => ({
  type: actionTypes.DELETE_USER,
  user,
});

export const setFilterData = searchData => ({
  type: actionTypes.FILTER_USERS,
  searchData,
})

export const importUsers = users => ({
  type: actionTypes.IMPORT_USERS,
})