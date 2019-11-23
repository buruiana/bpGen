import { put, takeLatest, select, call } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import { GENERATE_CODE } from "./actionTypes";
import { generateCodeFail } from "./actions";
import { executeCodeGeneration } from "./helper";
import { prettifyCode } from "../backEndService/actions";

export function* watchGenerateCode(action) {
  const template = (yield select()).customFormReducer.forms.currentTemplate;
  const forms = (yield select()).customFormReducer.forms;

  if (isEmpty(template)) {
    generateCodeFail({ error: "template not provided for code generation" });
    return null;
  }

  try {
    yield put(
      prettifyCode(
        executeCodeGeneration(template, forms)
      )
    );
  } catch (error) {
    generateCodeFail(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(GENERATE_CODE, watchGenerateCode);
}
