import * as actionTypes from './actionTypes';

export const setAlert = (alertMsg, alertHead, alertType) => ({
  type: actionTypes.SET_ALERT,
  alertMsg,
  alertHead,
  alertType
});
