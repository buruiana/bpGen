import { takeEvery, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_COMPONENT, GET_ALL_COMPONENTS, DELETE_COMPONENT } from "./actionTypes";
import { setAllComponents, getAllComponents } from "./actions";
import { exportModules } from '../backEndService/actions';
import { getExportModulesCode } from './helper';
import { mock } from "./mock";

import { setAlert } from '../alertService/actions';
import { alertTypes } from '../../utils/constants';

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetComponent(action) {
  const { component } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (component._id) {
      yield put(update('components', { ...component, userid }));
    } else {
      yield put(create('components', { ...component, userid }));
    }
    yield put(getAllComponents());
  }
  //yield put(exportModules(getExportModulesCode(components)));
}

export function* watchGetAllComponents(action) {
  const userid = (yield select()).loginReducer.userInfo._id;
  const { isOffline } = (yield select()).configsReducer.configs;
  let componentsArr = [];

  if (isOffline) {
    allComponents = mock.allComponents || [];
  } else {
    yield put(setAlert('Getting Components', '', alertTypes.INFO));
    yield put(getCollection('components', {}));
    // const snapshot = yield call(rsf.firestore.getCollection, "components");
    // snapshot.docs.filter(component => {
    //   const newComponent = component.data();

    //   if (newComponent.userid === userid || newComponent.isPublic) {
    //     componentsArr.push(newComponent);
    //   }
    // });
  }
  // if (isEmpty(componentsArr)) componentsArr = [];
  // sortBy(componentsArr, el => el.title);
  // yield put(setAllComponents(componentsArr));
}

export function* watchDeleteComponent(action) {
  const { _id } = action.component;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('components', _id));
    yield put(getAllComponents());
  }
}

export default function* rootSaga() {
  yield takeEvery(SET_COMPONENT, watchSetComponent);
  yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
  yield takeLatest(DELETE_COMPONENT, watchDeleteComponent);
}
