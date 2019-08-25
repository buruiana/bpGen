import { put, takeLatest } from "redux-saga/effects";
import { INIT_APP } from "../configsService/actionTypes";
import { getAllComponents } from "../componentsService/actions";
import { getAllProviders } from "../providersService/actions";
import { setInitAppDone } from "../configsService/actions";
import { getAllTechnos } from "../technosService/actions";
import { getAllTemplates } from "../templatesService/actions";

export function* watchInitApp(action) {
  yield put(getAllComponents());
  yield put(getAllProviders());
  yield put(getAllTechnos());
  yield put(getAllTemplates());
  yield put(setInitAppDone());
}

export default function* rootSaga() {
  yield takeLatest(INIT_APP, watchInitApp);
}
