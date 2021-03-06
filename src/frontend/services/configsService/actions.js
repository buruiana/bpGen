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

export const importData = ({ data, importType }) => ({
  type: actionTypes.IMPORT_DATA,
  data,
  importType
});

export const setConfigs = configs => ({
  type: actionTypes.SET_CONFIGS,
  configs
});