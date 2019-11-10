import * as actionTypes from './actionTypes';

export const initialState = () => ({
  component: {},
  components: [],
  searchData: {},
  tree: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_COMPONENT_TREE:
      return {
        ...state,
        tree: action.tree,
      };
    case actionTypes.SET_COMPONENT:
      return {
        ...state,
        component: action.component,
      };
    case actionTypes.SET_ALL_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case actionTypes.GET_COMPONENT:
      return {
        ...state,
        component: action.component,
      };
    case actionTypes.GET_ALL_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case actionTypes.DELETE_COMPONENT:
      return {
        ...state,
        component: action.component,
      };
    case actionTypes.FILTER_COMPONENTS:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};
