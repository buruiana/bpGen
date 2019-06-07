import * as actionTypes from "../configsService/actionTypes";

export const initialState = () => ({
  isOffline: false
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CONFIGS_IS_OFFLINE:
      return {
        ...state,
        isOffline: action.isOffline
      };
    default:
      return state;
  }
};
