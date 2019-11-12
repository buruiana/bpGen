import * as actionTypes from './actionTypes';

export const setAlert = (alertMsg, alertHead, alertType, alertAutoClose, alertAutoCloseDelay) => ({
  type: actionTypes.SET_ALERT,
  alertMsg,
  alertHead,
  alertType,
  alertAutoClose,
  alertAutoCloseDelay
});

export const clearAlert = () => ({
  type: actionTypes.CLEAR_ALERT,
});