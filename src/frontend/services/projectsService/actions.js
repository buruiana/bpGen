import * as actionTypes from "./actionTypes";

export const setProject = project => ({
  type: actionTypes.SET_PROJECT,
  project,
});

export const setCurrentProject = project => ({
  type: actionTypes.SET_CURRENT_PROJECT,
  project
});

export const setProjectFailure = error => ({
  type: actionTypes.SET_PROJECT_FAILURE,
  error
});

export const getProject = project => ({
  type: actionTypes.GET_PROJECT,
  project
});

export const getProjectSuccess = () => ({
  type: actionTypes.GET_PROJECT,
  project
});

export const getProjectFailure = error => ({
  type: actionTypes.GET_PROJECT_FAILURE,
  error
});

export const getAllProjects = projects => ({
  type: actionTypes.GET_ALL_PROJECTS,
  projects
});

export const getAllProjectsSuccess = projects => ({
  type: actionTypes.GET_ALL_PROJECTS_SUCCESS,
  projects
});

export const getAllProjectsFailure = error => ({
  type: actionTypes.GET_ALL_PROJECTS_FAILURE,
  error
});

export const setAllProjects = projects => ({
  type: actionTypes.SET_ALL_PROJECTS,
  projects
});

export const setAllProjectsSuccess = projects => ({
  type: actionTypes.SET_ALL_PROJECTS_SUCCESS,
  projects
});

export const setAllProjectsFailure = error => ({
  type: actionTypes.SET_ALL_PROJECTS_FAILURE,
  error
});

export const deleteProject = project => ({
  type: actionTypes.DELETE_PROJECT,
  project
});

export const setProjectTree = tree => ({
  type: actionTypes.SET_PROJECT_TREE,
  tree
});

