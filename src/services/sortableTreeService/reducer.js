import * as actionTypes from '../sortableTreeService/actionTypes';

export const initialState = () => ({
  tree: [],
  defaultTree: [],
  nodePath: {
    node: {},
    path: [],
    type: '',
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.TREE_SET:
      return {
        ...state,
        tree: action.payload.treeData2
      };
    case actionTypes.DEFAULT_TREE_SET:
      return {
        ...state,
        defaultTree: action.payload
      };
    case actionTypes.NODE_PATH_SET:
      return {
        ...state,
        nodePath: action.payload
      };
    default:
      return state;
  }
}

export const getTree = state => state.sortableTreeServiceReduceer.tree;
export const getDefaultTree = state => state.sortableTreeServiceReduceer.defaultTree;
export const getNodePath = state => state.sortableTreeServiceReduceer.nodePath;