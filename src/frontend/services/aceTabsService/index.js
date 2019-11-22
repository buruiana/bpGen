import { put, takeLatest, select } from "redux-saga/effects";
import { SET_CUSTOM_FORM } from "../customFormService/actionTypes";

import { setAceTabs } from "./actions";

export function* watchSetCustomForm() {
  const { currentTemplate } = (yield select()).customFormReducer.forms || [];
  const { templateFiles } = currentTemplate;
  const files = templateFiles.map(e => e.fileName);

  yield put(setAceTabs(files));
}

export default function* rootSaga() {
  yield takeLatest(SET_CUSTOM_FORM, watchSetCustomForm);
}
