import { ADD_MODAL, REMOVE_MODAL } from "./actionTypes";

export const addModal = (modal, modalData) => ({
  type: ADD_MODAL,
  modal,
  modalData
});

export const removeModal = () => ({
  type: REMOVE_MODAL
});
