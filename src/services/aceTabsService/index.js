import { put, takeLatest, select } from "redux-saga/effects";
import { SET_PROJECT_SETTINGS } from "../projectSettingsService/actionTypes";
import { SERVICE } from "../../utils/constants";
import { setAceTabs } from "./actions";

export function* watchSetProjectSettings() {
  const { currentTemplate } = (yield select()).templatesReducer || [];
  const { templateFiles } = currentTemplate;
  const files = templateFiles.map(e => e.fileName);

  yield put(setAceTabs(files));
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS, watchSetProjectSettings);
}
