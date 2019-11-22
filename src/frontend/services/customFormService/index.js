import { put, takeLatest } from "redux-saga/effects";
import { SET_CUSTOM_FORM } from "./actionTypes";
import { setAceTabs } from "../aceTabsService/actions";

export function* watchSetCustomForm(action) {
    console.log('console: watchSetCustomForm', action);
    // const { currentTemplate } = action.forms || [];
    // const { templateFiles } = currentTemplate;
    // const files = templateFiles.map(e => e.fileName);

    // yield put(setAceTabs(files));
}

export default function* rootSaga() {
    console.log('console: 1111111111111111111', );
    yield takeLatest(SET_CUSTOM_FORM, watchSetCustomForm);
}