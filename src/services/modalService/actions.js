import { ADD_MODAL, REMOVE_MODAL, SET_MODDAL_DATA } from "./actionTypes";

export const addModal = modal => ({
  type: ADD_MODAL,
  modal
});

export const removeModal = () => ({
  type: REMOVE_MODAL
});

export const setModalData = modalData => ({
  type: SET_MODDAL_DATA,
  modalData
});
