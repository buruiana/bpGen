import * as actionTypes from "../configsService/actionTypes";

export const initialState = () => ({
  initAppDone: false,
  configs: {
    isOffline: false,
    hasComponentPreview: false,
    hasComponentImport: false,
    hasTemplateImport: false,
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CONFIG:
      return {
        ...state,
        configs: {
          ...configs,
          [action.configs.name]: action.configs.val
        },
      };
    case actionTypes.INIT_APP_DONE:
      return {
        ...state,
        initAppDone: true
      };
    default:
      return state;
  }
};