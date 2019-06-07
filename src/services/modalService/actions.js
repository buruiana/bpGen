import { ADD_MODAL, REMOVE_MODAL } from "./actionTypes";

export const addModal = modal => ({
  type: ADD_MODAL,
  modal
});

export const removeModal = () => ({
  type: REMOVE_MODAL
});
