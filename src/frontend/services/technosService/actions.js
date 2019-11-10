import * as actionTypes from './actionTypes';

export const setTechno = techno => ({
  type: actionTypes.SET_TECHNO,
  techno,
});

export const setAllTechnos = technos => ({
  type: actionTypes.SET_ALL_TECHNOS,
  technos,
});

export const getTechno = techno => ({
  type: actionTypes.GET_TECHNO,
  techno,
});

export const getAllTechnos = technos => ({
  type: actionTypes.GET_ALL_TECHNOS,
  technos,
});

export const deleteTechno = techno => ({
  type: actionTypes.DELETE_TECHNO,
  techno,
});

export const setFilterData = searchData => ({
  type: actionTypes.FILTER_TECHNOS,
  searchData,
})