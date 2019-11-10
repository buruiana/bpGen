import * as actionTypes from "../aceTabsService/actionTypes";

export const initialState = () => ({
  aceTab: "",
  aceTabs: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ACE_TAB:
      return {
        ...state,
        aceTab: action.aceTab
      };
    case actionTypes.SET_ACE_TABS:
      return {
        ...state,
        aceTabs: action.aceTabs
      };
    default:
      return state;
  }
};
