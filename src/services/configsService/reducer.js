import * as actionTypes from "../configsService/actionTypes";

export const initialState = () => ({
  initAppDone: false,
  configs: {
    isOffline: true,
    hasComponentPreview: false,
    hasComponentImport: false,
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    // case actionTypes.SET_CONFIGS_IS_OFFLINE:
    //   return {
    //     ...state,
    //     configs: {
    //       ...configs,
    //       isOffline: action.isOffline
    //     },
    //   };
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
