import { takeEvery, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_TECHNO, GET_ALL_TECHNOS, DELETE_TECHNO } from "./actionTypes";
import { getAllTechnos } from "./actions";
import { mock } from "./mock";

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetTechno(action) {
  const { techno } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const  userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (techno._id) {
      yield put(update('technos', { ...techno, userid }));
    } else {
      yield put(create('technos', { ...techno, userid }));
    }
    //yield put(getAllTechnos());
  }
}

export function* watchGetAllTechnos(action) {
  const { isOffline } = (yield select()).configsReducer.configs;

  if (isOffline) {
    allTechnos = mock.allTechnos || [];
  } else {
    yield put(getCollection('technos', {}));
  }
}

export function* watchDeleteTechno(action) {
  const { _id } = action.techno;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('technos', _id));
    //yield put(getAllTechnos());
  }
}

export default function* rootSaga() {
  yield takeEvery(SET_TECHNO, watchSetTechno);
  yield takeLatest(GET_ALL_TECHNOS, watchGetAllTechnos);
  yield takeLatest(DELETE_TECHNO, watchDeleteTechno);
}
