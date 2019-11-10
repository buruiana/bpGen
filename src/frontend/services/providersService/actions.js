import * as actionTypes from './actionTypes';

export const setProvider = provider => ({
  type: actionTypes.SET_PROVIDER,
  provider,
});

export const setAllProviders = providers => ({
  type: actionTypes.SET_ALL_PROVIDERS,
  providers,
});

export const getProvider = provider => ({
  type: actionTypes.GET_PROVIDER,
  provider,
});

export const getAllProviders = providers => ({
  type: actionTypes.GET_ALL_PROVIDERS,
  providers,
});

export const deleteProvider = provider => ({
  type: actionTypes.DELETE_PROVIDER,
  provider,
});

export const setFilterData = searchData => ({
  type: actionTypes.FILTER_PROVIDERS,
  searchData,
})