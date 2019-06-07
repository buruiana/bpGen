import * as actionTypes from "../modalService/actionTypes";
import dropRight from "lodash/dropRight";
export const initialState = () => ({
  modals: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.ADD_MODAL:
      return {
        ...state,
        modals: [...state.modals, action.modal]
      };
    case actionTypes.REMOVE_MODAL:
      return {
        ...state,
        modals: dropRight(state.modals, 1)
      };
    default:
      return state;
  }
};
