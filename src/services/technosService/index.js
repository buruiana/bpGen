import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_TECHNO, GET_ALL_TECHNOS, DELETE_TECHNO } from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllTechnos, getAllTechnos } from "./actions";
import { mock } from "./mock";

export function* watchSetTechno(action) {
  const { techno } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (techno.id) {
      yield call(rsf.firestore.setDocument, `technos/${techno.id}`, techno);
    } else {
      yield call(rsf.firestore.addDocument, `technos`, techno);
    }
    yield put(getAllTechnos());
  }
}

export function* watchGetAllTechnos(action) {
  let allTechnos = [];
  const { isOffline } = (yield select()).configsReducer;

  if (isOffline) {
    allTechnos = mock.allTechnos;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "technos");
    allTechnos = snapshot.docs.map(techno => {
      return { ...techno.data(), id: techno.id };
    });
  }
  if (isEmpty(allTechnos)) allTechnos = [];
  sortBy(allTechnos, el => el.title);
  yield put(setAllTechnos(allTechnos));
}

export function* watchDeleteTechno(action) {
  const { id } = action.techno;
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `technos/${id}`);
    yield put(getAllTechnos());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_TECHNO, watchSetTechno);
  yield takeLatest(GET_ALL_TECHNOS, watchGetAllTechnos);
  yield takeLatest(DELETE_TECHNO, watchDeleteTechno);
}
