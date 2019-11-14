import { takeEvery, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_PROVIDER, GET_ALL_PROVIDERS, DELETE_PROVIDER } from "./actionTypes";
import { getAllProviders } from "./actions";
import { mock } from "./mock";

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetProvider(action) {
  const { provider } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;
  let newProvider = { ...provider };
  newProvider.children = [];

  if (!isOffline) {
    if (provider._id) {
      yield put(update('providers', { ...provider, userid } ));
    } else {
      yield put(create('providers', { ...provider, userid } ));
    }
    //yield put(getAllProviders());
  }
}

export function* watchGetAllProviders(action) {
  const { isOffline } = (yield select()).configsReducer.configs;

  if (isOffline) {
    allProviders = mock.allProviders || [];
  } else {
    yield put(getCollection('providers', {}));
  }
}

export function* watchDeleteProvider(action) {
  const { _id } = action.provider;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('providers', _id));
    //yield put(getAllProviders());
  }
}

export default function* rootSaga() {
  yield takeEvery(SET_PROVIDER, watchSetProvider);
  yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
  yield takeLatest(DELETE_PROVIDER, watchDeleteProvider);
}
