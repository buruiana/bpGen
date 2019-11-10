import { put, takeLatest, call, select } from "redux-saga/effects";
import axios from 'axios';
import {
  PRETTIFY_CODE,
  EXPORT_MODULES,
  AUTHENTICATE,
  REGISTER,
} from '../backEndService/actionTypes';
import { generateCodeSuccess } from '../codeGenerationService/actions';

import { loginSuccess, loginFailure } from '../loginService/actions';
import { navigate } from '../../utils';

const callBackend = (type, data) => { 
  return axios.post(`http://localhost:5000/api/${type}`, { data });
};

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

export function* watchExportModule(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('exportModules', info.data);
    return res;
  } catch (err) {
    console.log('console: err', err);
  }
}

export function* watchAuthenticate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('authenticate', info.data);
    yield put(loginSuccess(res.data))
    yield call(navigate, '/editor');
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(loginFailure(err))
  }
}

export function* watchRegister(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('register', info.data);
    yield put(loginSuccess(res.data))
    yield call(navigate, '/editor');
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(loginFailure(err))
  }
}

export default function* rootSaga() {
  yield takeLatest(PRETTIFY_CODE, watchPrettyfyCode);
  yield takeLatest(EXPORT_MODULES, watchExportModule);
  yield takeLatest(AUTHENTICATE, watchAuthenticate);
  yield takeLatest(REGISTER, watchRegister);
}