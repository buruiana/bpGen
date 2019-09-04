import * as actionTypes from './actionTypes';

export const setComponent = component => ({
  type: actionTypes.SET_COMPONENT,
  component,
});

export const setAllComponents = components => ({
  type: actionTypes.SET_ALL_COMPONENTS,
  components,
});

export const getComponent = component => ({
  type: actionTypes.GET_COMPONENT,
  component,
});

export const getAllComponents = components => ({
  type: actionTypes.GET_ALL_COMPONENTS,
  components,
});

export const deleteComponent = component => ({
  type: actionTypes.DELETE_COMPONENT,
  component,
});

export const setFilterData = searchData => ({
  type: actionTypes.FILTER_COMPONENTS,
  searchData,
});