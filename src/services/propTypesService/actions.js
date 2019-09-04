import * as actionTypes from './actionTypes';

export const setPropType = propType => ({
  type: actionTypes.SET_PROP_TYPE,
  propType,
});

export const setAllPropTypes = propTypes => ({
  type: actionTypes.SET_ALL_PROP_TYPES,
  propTypes,
});

export const getPropType = propType => ({
  type: actionTypes.GET_PROP_TYPE,
  propType,
});

export const getAllPropTypes = propTypes => ({
  type: actionTypes.GET_ALL_PROP_TYPES,
  propTypes,
});

export const deletePropType = propType => ({
  type: actionTypes.DELETE_PROP_TYPE,
  propType,
});

export const setFilterData = searchData => ({
  type: actionTypes.FILTER_PROP_TYPES,
  searchData,
})

export const importPropTypes = propTypes => ({
  type: actionTypes.IMPORT_PROP_TYPES,
})