import { put, takeLatest, call, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import {
  PRETTIFY_CODE,
  EXPORT_MODULES,
  AUTHENTICATE,
  REGISTER,
  CREATE,
  UPDATE,
  DELETE,
  GET_COLLECTION,
} from '../backEndService/actionTypes';
import { generateCodeSuccess } from '../codeGenerationService/actions';

import { loginSuccess, loginFailure } from '../loginService/actions';
import { setAlert } from '../alertService/actions';
import { setAllTechnos } from '../technosService/actions';
import { setAllProviders } from '../providersService/actions';
import { setAllPropTypes } from '../propTypesService/actions';
import { setAllProjects } from '../projectsService/actions';
import { setAllTemplates } from '../templatesService/actions';
import { setAllComponents } from '../componentsService/actions';
import { navigate } from '../../utils';
import { alertTypes } from '../../utils/constants';

const callBackend = (type, data) => {
  return axios.post(`http://localhost:5000/api/${type}`, { data });
};

const callBackendDelete = data => {
  return axios.delete(`http://localhost:5000/api/delete`, { data });
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
    const res = yield callBackend('exportModules', info);
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export function* watchAuthenticate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('authenticate', info.data);
    yield put(loginSuccess(res.data));
    yield call(navigate, '/editor');
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(loginFailure(err));
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export function* watchRegister(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('register', info.data);
    yield put(loginSuccess(res.data));
    yield call(navigate, '/editor');
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(loginFailure(err));
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export function* watchCreate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('create', info);
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export function* watchUpdate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('update', info);
    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
};

export function* updateCollection({ info, res }) {

  switch (info) {
    case 'technos':
      yield put(setAllTechnos(res));
      break;
    case 'providers':
      yield put(setAllProviders(res));
      break;
    case 'propTypes':
      yield put(setAllPropTypes(res));
      break;
    case 'templates':
      yield put(setAllTemplates(res));
      break;
    case 'projects':
      yield put(setAllProjects(res));
      break;
    case 'components':
      yield put(setAllComponents(res));
      break;
    default:
      break;
  }
};

export function* watchGetCollection(info) {
  if (!info.dataType) return;
  try {
    const res = yield callBackend('getCollection', info.dataType);
    yield call(updateCollection, { info: info.dataType, res: res.data });

    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export function* watchDelete(info) {
  console.log('console: watchDelete info', info);
  if (!info.dataType) return;
  try {
    const res = yield callBackendDelete(info);
    yield call(updateCollection, { info, res });

    return res;
  } catch (err) {
    console.log('console: err', err);
    yield put(setAlert(JSON.stringify(err.message), 'ERROR', alertTypes.DANGER));
  }
}

export default function* rootSaga() {
  yield takeLatest(PRETTIFY_CODE, watchPrettyfyCode);
  yield takeLatest(EXPORT_MODULES, watchExportModule);
  yield takeLatest(AUTHENTICATE, watchAuthenticate);
  yield takeLatest(REGISTER, watchRegister);
  yield takeLatest(CREATE, watchCreate);
  yield takeLatest(UPDATE, watchUpdate);
  yield takeLatest(DELETE, watchDelete);
  yield takeEvery(GET_COLLECTION, watchGetCollection);
}