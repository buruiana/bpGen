import * as actionTypes from "./actionTypes";

export const setProjectSettings = projectSettings => ({
  type: actionTypes.SET_PROJECT_SETTINGS,
  projectSettings
});

export const setProjectError = err => ({
  type: actionTypes.SET_PROJECT_SETTINGS_ERROR,
  err
});

export const initProject = () => ({
  type: actionTypes.INIT_PROJECT,
  exported: false
});
