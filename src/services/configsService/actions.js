import * as actionTypes from './actionTypes';

export const setConfigsIsOffline = isOffline => ({
  type: actionTypes.SET_CONFIGS_IS_OFFLINE,
  isOffline
});

export const initApp = () => ({
  type: actionTypes.INIT_APP
});

export const setInitAppDone = () => ({
  type: actionTypes.INIT_APP_DONE
});