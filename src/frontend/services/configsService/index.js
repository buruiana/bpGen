import { all, select, put, takeLatest, call } from "redux-saga/effects";
import isEmpty from 'lodash/isEmpty';

import { INIT_APP, IMPORT_DATA } from "../configsService/actionTypes";
import { getAllComponents } from "../componentsService/actions";
import { getAllProviders } from "../providersService/actions";
import { getAllTechnos } from "../technosService/actions";
import { getAllTemplates } from "../templatesService/actions";
import { getAllPropTypes } from "../propTypesService/actions";
import { getAllProjects } from "../projectsService/actions";
import { getAllUsers } from "../usersService/actions";

import { setComponent } from '../componentsService/actions';
import { setPropType } from '../propTypesService/actions';
import { setPovider } from '../providersService/actions';
import { setTemplate } from '../templatesService/actions';
import { setProject } from '../projectsService/actions';
import { setTechno } from '../technosService/actions';

export function* watchInitApp(action) {
  yield put(getAllUsers());
  yield put(getAllComponents());
  yield put(getAllProviders());
  yield put(getAllTechnos());
  yield put(getAllTemplates());
  yield put(getAllPropTypes());
  yield put(getAllProjects());
}

export function* setData({ importType, data }) {
  switch (importType) {
    case 'components':
      yield put(setComponent(data));
      break;
    case 'providers':
      yield put(setPovider(data));
      break;
    case 'propTypes':
      yield put(setPropType(data));
      break;
    case 'templates':
      yield put(setTemplate(data));
      break;
    case 'projects':
      yield put(setProject(data));
      break;
    case 'technos':
      yield put(setTechno(data));
      break;
    default:
      break;
  }
}

export function* watchImportData(action) {
  const { data, importType } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (!isEmpty(data)) {
      yield all(data.map(el => call(
        setData, {
          data: {
            ...el, userid
          },
          importType }
      )));
    }
  }
}

export default function* rootSaga() {
  yield takeLatest(INIT_APP, watchInitApp);
  yield takeLatest(IMPORT_DATA, watchImportData);
}
