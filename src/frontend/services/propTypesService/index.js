import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_PROP_TYPE,
  GET_ALL_PROP_TYPES,
  DELETE_PROP_TYPE,
  IMPORT_PROP_TYPES
} from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllPropTypes, getAllPropTypes } from "./actions";
import { mock } from "./mock";
import { setInitAppDone } from '../configsService/actions';

export function* watchSetPropType(action) {
  const { propType } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (propType.id) {
      yield call(rsf.firestore.setDocument, `propTypes/${propType.id}`, propType);
    } else {
      yield call(rsf.firestore.addDocument, `propTypes`, propType);
    }
    yield put(getAllPropTypes());
  }
}

export function* watchGetAllPropTypes(action) {
  let allPropTypes = [];
  const { isOffline } = (yield select()).configsReducer.configs;

  if (isOffline) {
    allPropTypes = mock.allPropTypes;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "propTypes");
    allPropTypes = snapshot.docs.map(propType => {
      return { ...propType.data(), id: propType.id };
    });
  }
  if (isEmpty(allPropTypes)) allPropTypes = [];
  sortBy(allPropTypes, el => el.title);
  yield put(setAllPropTypes(allPropTypes));
  yield put(setInitAppDone());
}

export function* watchDeletePropType(action) {
  const { id } = action.propType;
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `propTypes/${id}`);
    yield put(getAllPropTypes());
  }
}

export function* watchImportPropType(action) {
  const { propTypes } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (!isEmpty(propTypes)) {
      yield all(propTypes.map(el => {
        if (el.id) call(rsf.firestore.deleteDocument, `propTypes/${id}`);
        call(rsf.firestore.addDocument, `propTypes`, el);
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
