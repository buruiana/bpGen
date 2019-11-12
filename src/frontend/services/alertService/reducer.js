import * as actionTypes from "../alertService/actionTypes";

export const initialState = () => ({
  alertMsg: '',
  alertHead: '',
  alertType: '',
  alertAutoClose: false,
  alertAutoCloseDelay: 5000,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALERT:
      return {
        ...state,
        alertMsg: action.alertMsg,
        alertHead: action.alertHead,
        alertType: action.alertType,
        alertAutoClose: action.alertAutoClose,
        alertAutoCloseDelay: action.alertAutoCloseDelay,
      };
    case actionTypes.CLEAR_ALERT:
      return initialState();
    default:
      return state;
  }
};
