import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_USER,
  GET_ALL_USERS,
  DELETE_USER,
  IMPORT_USERS
} from "./actionTypes";

import { setAllUsers, getAllUsers } from "./actions";
import { mock } from "./mock";
import { setInitAppDone } from '../configsService/actions';

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetUser(action) {
  const { user } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (user._id) {
      yield put(update('users', { ...user, userid }));
    } else {
      yield put(create('users', { ...user, userid }));
    }
    yield put(getAllUsers());
  }
}

export function* watchGetAllUsers(action) {
  let allUsers = [];
  const { isOffline } = (yield select()).configsReducer.configs;

  if (isOffline) {
    allUsers = mock.allUsers || [];
  } else {
    yield put(getCollection('users', {}));
  }
}

export function* watchDeleteUser(action) {
  const { _id } = action.user;
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    yield put(remove('users', _id));
    //yield put(getAllUsers());
  }
}

export function* watchImportUser(action) {
  const { users } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (!isEmpty(users)) {
      yield all(users.map(el => {
       // if (el.id) call(rsf.firestore.deleteDocument, `users/${id}`);
        //call(rsf.firestore.addDocument, `users`, el);
      }));
    }
   // yield put(getAllUsers());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_USER, watchSetUser);
  yield takeLatest(GET_ALL_USERS, watchGetAllUsers);
  yield takeLatest(DELETE_USER, watchDeleteUser);
  yield takeLatest(IMPORT_USERS, watchImportUser);
}
