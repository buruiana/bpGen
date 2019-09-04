import { select, put, takeLatest } from "redux-saga/effects";
import { INIT_APP, IMPORT_DATA } from "../configsService/actionTypes";
import { getAllComponents } from "../componentsService/actions";
import { getAllProviders } from "../providersService/actions";
import { getAllTechnos } from "../technosService/actions";
import { getAllTemplates } from "../templatesService/actions";
import { getAllPropTypes } from "../propTypesService/actions";

export function* watchInitApp(action) {
  yield put(getAllComponents());
  yield put(getAllProviders());
  yield put(getAllTechnos());
  yield put(getAllTemplates());
  yield put(getAllPropTypes());
}

export function* watchImportData(action) {
  const { data, importType } = action;
  const { isOffline } = (yield select()).configsReducer;
  console.log('console: actionaction', action);


  // if (!isOffline) {
  //   if (!isEmpty(data)) {
  //     yield data.map(el => {
  //       if (el.id) call(rsf.firestore.deleteDocument, `${importType}/${id}`);
  //       call(rsf.firestore.addDocument, `${importType}`, el);
  //     });
  //   }

  //   switch (importType) {
  //     case value: 'propTypes'
  //       yield put(getAllPropTypes());
  //       break;

  //     default:
  //       break;
  //   }
  // }
}

export default function* rootSaga() {
  yield takeLatest(INIT_APP, watchInitApp);
  yield takeLatest(IMPORT_DATA, watchImportData);
}
