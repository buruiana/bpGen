import { put, takeLatest, select } from "redux-saga/effects";
import axios from 'axios';
import { PRETTIFY_CODE } from '../backEndService/actionTypes';
import { generateCodeSuccess } from '../codeGenerationService/actions';

const prettify = (code, parser) => {
  return axios.post('http://localhost:5000/api/prettify', code, parser);
}

export function* watchPrettyfyCode(code, parser = "babel") {
  let prettyCode = [];
  try {
    const res = yield prettify({ code, parser });
    prettyCode = res.data;
    yield put(generateCodeSuccess(prettyCode));
  } catch (err) {
    prettyCode = JSON.parse(err.config.data);
    prettyCode = prettyCode.code;
  }
}

export default function* rootSaga() {
  yield takeLatest(PRETTIFY_CODE, watchPrettyfyCode);
}