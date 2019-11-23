import { put, takeLatest, call, select, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import get from 'lodash/get';
import {
  PRETTIFY_CODE,
  EXPORT_MODULES,
  AUTHENTICATE,
  REGISTER,
  CREATE,
  UPDATE,
  DELETE,
  GET_COLLECTION,
  EXPORT_PROJECT_FILES,
} from '../backEndService/actionTypes';
import { generateCodeSuccess } from '../codeGenerationService/actions';

import { loginSuccess, loginFailure } from '../loginService/actions';
import { setAlert } from '../alertService/actions';
import { setAllTechnos, getAllTechnos } from '../technosService/actions';
import { setAllProviders, getAllProviders } from '../providersService/actions';
import { setAllPropTypes, getAllPropTypes } from '../propTypesService/actions';
import { setAllProjects, getAllProjects } from '../projectsService/actions';
import { setAllTemplates, getAllTemplates } from '../templatesService/actions';
import { setAllComponents, getAllComponents } from '../componentsService/actions';
import { setAllUsers, getAllUsers } from '../usersService/actions';
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
};

const exportFiles = data => {
  return axios.post('http://localhost:5000/api/exportFiles', data);
};

export function* watchPrettyfyCode(code, parser = "babel") {
  let prettyCode = [];
  console.log('console:watchPrettyfyCode ', code);
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
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
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
    yield put(loginFailure(err));
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
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
    yield put(loginFailure(err));
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
  }
}

export function* watchCreate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('create', info);
    yield call(getCollection, info.dataType);
    return res;
  } catch (err) {
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
  }
}

export function* watchUpdate(info) {
  if (!info.data) return;
  try {
    const res = yield callBackend('update', info);
    yield call(getCollection, info.dataType);
    return res;
  } catch (err) {
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
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
    case 'users':
      yield put(setAllUsers(res));
      break;
    default:
      break;
  }
};

export function* getCollection( info ) {

  switch (info) {
    case 'technos':
      yield put(getAllTechnos());
      break;
    case 'providers':
      yield put(getAllProviders());
      break;
    case 'propTypes':
      yield put(getAllPropTypes());
      break;
    case 'templates':
      yield put(getAllTemplates());
      break;
    case 'projects':
      yield put(getAllProjects());
      break;
    case 'components':
      yield put(getAllComponents());
      break;
    case 'users':
      yield put(getAllUsers());
      break;
    default:
      break;
  }
};

export function* watchGetCollection(info) {
  if (!info.dataType) return;
  try {
    const userid = (yield select()).loginReducer.userInfo._id;
    const res = yield callBackend('getCollection', { info: info.dataType, userid });
    yield call(updateCollection, { info: info.dataType, res: res.data });

    return res;
  } catch (err) {
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
  }
}

export function* watchDelete(info) {
  if (!info.dataType) return;
  try {
    const res = yield callBackendDelete(info);
    yield call(getCollection, info.dataType);

    return res;
  } catch (err) {
    yield put(
      setAlert(
        JSON.stringify(get(err, 'response.data.error', err.message)),
        '',
        alertTypes.DANGER)
    );
  }
}

export function* watchExportProjectFiles(action) {
  yield call(exportFiles, action.data);
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
  yield takeLatest(EXPORT_PROJECT_FILES, watchExportProjectFiles);

}