import { call, takeLatest, select, put } from "redux-saga/effects";
import {
  EXPORT_PROJECT_FILES,
} from '../projectSettingsService/actionTypes';
import {
  exportFilesBE,
} from '../../utils';

export function* watchExportProjectFiles(action) {
  yield call(exportFilesBE, action.data);
}

export default function* rootSaga() {
  yield takeLatest(EXPORT_PROJECT_FILES, watchExportProjectFiles);
}
