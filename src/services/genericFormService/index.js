import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { SET_GENERIC_FORM } from './actionTypes';

export function* watchSetGenericForm(action) { }

export default function* rootSaga() {
  yield takeLatest(SET_GENERIC_FORM, watchSetGenericForm);
}
