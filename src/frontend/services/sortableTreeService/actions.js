import * as actionTypes from './actionTypes';

export const setTree = tree => {
  return {
    type: actionTypes.TREE_SET,
    payload: tree
  };
}

export const setDefaultTree = tree => {
  return {
    type: actionTypes.DEFAULT_TREE_SET,
    payload: tree
  };
}

export function setNodePath(nodePath) {
  return {
    type: actionTypes.NODE_PATH_SET,
    payload: nodePath
  };
}
