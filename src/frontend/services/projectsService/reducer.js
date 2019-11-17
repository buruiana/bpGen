import * as actionTypes from "./actionTypes";

export const initialState = () => ({
  error: "",
  currentProject: {},
  projects: [],
  tree: [{
    title: '',
    subtitle: 'Project',
    expanded: true,
    //children: [],
  }],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECT:
      return {
        ...state,
        error: ""
      };
    case actionTypes.SET_CURRENT_PROJECT:
      return {
        ...state,
        error: "",
        currentProject: action.project
      };
    case actionTypes.SET_ALL_PROJECTS:
      return {
        ...state,
        error: "",
        projects: action.projects
      };
    case actionTypes.SET_PROJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.SET_PROJECT_TREE:
      return {
        ...state,
        tree: action.tree
      };
    default:
      return state;
  }
};
