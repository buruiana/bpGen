import { put, takeLatest, select } from "redux-saga/effects";
import axios from 'axios';
import { PRETTIFY_CODE, EXPORT_MODULES } from '../backEndService/actionTypes';
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

const exportModules = data => {
  return axios.post('http://localhost:5000/api/exportModules', { data });
}

export function* watchExportModule(info) {
  console.log('console: info.data', info.data);
  if (!info.data) return;
  try {
    const res = yield exportModules(info.data);
    return res;
  } catch (err) {
    console.log('console: err', err);
  }
}

export default function* rootSaga() {
  yield takeLatest(PRETTIFY_CODE, watchPrettyfyCode);
  yield takeLatest(EXPORT_MODULES, watchExportModule);
}