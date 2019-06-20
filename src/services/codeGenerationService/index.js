import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import { GENERATE_CODE } from "./actionTypes";
import { generateCodeSuccess, generateCodeFail } from "./actions";
import { executeCodeGeneration } from "./helper";
//import { mock } from "./mock";

export function* watchGenerateCode(action) {
  const template = (yield select()).projectSettingsReducer.projectSettings
    .template;
  const forms = (yield select()).customFormReducer.forms;

  if (isEmpty(template)) {
    generateCodeFail({ error: "template not provided for code generation" });
    return null;
  }

  try {
    const code = executeCodeGeneration(template, forms);
    console.log("console: =================", code);
    yield put(generateCodeSuccess(code));
  } catch (error) {
    generateCodeFail(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(GENERATE_CODE, watchGenerateCode);
}
