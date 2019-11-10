import * as actionTypes from "../projectSettingsService/actionTypes";

export const initialState = () => ({
  projectSettings: {},
  projectError: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECT_SETTINGS:
      return {
        ...state,
        projectSettings: action.projectSettings
      };
    case actionTypes.SET_PROJECT_SETTINGS_ERROR:
      return {
        ...state,
        err: action.err
      };
    case actionTypes.INIT_PROJECT:
      return {
        ...state,
        projectSettings: {}
      };
    default:
      return state;
  }
};
