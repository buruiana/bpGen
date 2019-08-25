import * as actionTypes from "../configsService/actionTypes";

export const initialState = () => ({
  isOffline: false,
  initAppDone: false
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CONFIGS_IS_OFFLINE:
      return {
        ...state,
        isOffline: action.isOffline
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
