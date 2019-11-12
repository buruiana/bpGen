import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_PROP_TYPE,
  GET_ALL_PROP_TYPES,
  DELETE_PROP_TYPE,
  IMPORT_PROP_TYPES
} from "./actionTypes";

import { setAllPropTypes, getAllPropTypes } from "./actions";
import { mock } from "./mock";
import { setInitAppDone } from '../configsService/actions';

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetPropType(action) {
  const { propType } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (propType._id) {
      yield put(update('propTypes', { ...propType, userid }));
    } else {
      yield put(create('propTypes', { ...propType, userid }));
    }
    yield put(getAllPropTypes());
  }
}

export function* watchGetAllPropTypes(action) {
  let allPropTypes = [];
  const { isOffline } = (yield select()).configsReducer.configs;

  if (isOffline) {
    allPropTypes = mock.allPropTypes || [];
  } else {
    yield put(getCollection('propTypes', {}));
  }

  yield put(setInitAppDone());
}

export function* watchDeletePropType(action) {
  const { _id } = action.propType;
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    yield put(remove('propTypes', _id));
    yield put(getAllPropTypes());
  }
}

export function* watchImportPropType(action) {
  const { propTypes } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (!isEmpty(propTypes)) {
      yield all(propTypes.map(el => {
       // if (el.id) call(rsf.firestore.deleteDocument, `propTypes/${id}`);
        //call(rsf.firestore.addDocument, `propTypes`, el);
      }));
    }
    yield put(getAllPropTypes());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROP_TYPE, watchSetPropType);
  yield takeLatest(GET_ALL_PROP_TYPES, watchGetAllPropTypes);
  yield takeLatest(DELETE_PROP_TYPE, watchDeletePropType);
  yield takeLatest(IMPORT_PROP_TYPES, watchImportPropType);
}
