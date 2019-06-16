import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_PROP_TYPE, GET_ALL_PROP_TYPES, DELETE_PROP_TYPE } from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllPropTypes, getAllPropTypes } from "./actions";
import { mock } from "./mock";

export function* watchSetPropType(action) {
  const { propType } = action;
  const { isOffline } = (yield select()).configsReducer;

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
  const { isOffline } = (yield select()).configsReducer;

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
}

export function* watchDeletePropType(action) {
  const { id } = action.propType;
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `propTypes/${id}`);
    yield put(getAllPropTypes());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROP_TYPE, watchSetPropType);
  yield takeLatest(GET_ALL_PROP_TYPES, watchGetAllPropTypes);
  yield takeLatest(DELETE_PROP_TYPE, watchDeletePropType);
}
