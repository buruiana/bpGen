import { put, takeLatest, select } from "redux-saga/effects";
import { SET_PROJECT_SETTINGS } from "../projectSettingsService/actionTypes";
import { SERVICE } from "../../utils/constants";
import { setAceTabs } from "./actions";

export function* watchSetProjectSettings() {
  const {
    projectType,
    projectName,
    template
  } = (yield select()).projectSettingsReducer.projectSettings;
  const { templateFiles } = template;
  const files = templateFiles.map(e => e.fileName);

  const tabs = projectType === SERVICE ? files : files; //.push(projectName);

  yield put(setAceTabs(tabs));
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS, watchSetProjectSettings);
}
