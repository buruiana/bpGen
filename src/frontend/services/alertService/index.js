import { select, put, takeLatest } from "redux-saga/effects";

import { addModal, removeModal } from '../modalService/actions';
import { allmodals } from '../../utils/constants';
import { SET_ALERT } from "./actionTypes";

export function* watchSetAlert(action) {
  console.log('console: watchSetMsg', action);
  //yield put(addModal(allmodals.SPINNER));

 //yield put(removeModal(allmodals.SPINNER));
}

export default function* rootSaga() {
  yield takeLatest(SET_ALERT, watchSetAlert);
}
