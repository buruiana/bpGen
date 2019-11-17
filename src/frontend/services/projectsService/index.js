import { takeEvery, put, takeLatest, select } from "redux-saga/effects";
import {
  SET_PROJECT,
  DELETE_PROJECT,
  GET_ALL_PROJECTS
} from "./actionTypes";

import { mock } from "./mock";

import {
  create,
  update,
  remove,
  getCollection
} from '../backEndService/actions';

export function* watchSetProject(action) {
  const { project } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;

  if (!isOffline) {
    if (project._id) {
      yield put(update('projects', { ...project, userid }));
    } else {
      yield put(create('projects', {
        ...project,
        userid,
      }));
    }
  }
}

export function* watchGetAllProjects(action) {
  const { isOffline } = (yield select()).configsReducer.configs;
  if (isOffline) {
    projectArr = mock.allProjects;
  } else {
    yield put(getCollection('projects', {}));
  }
}

export function* watchDeleteProject(action) {
  const { _id } = action.project;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('projects', _id));
  }
}

export default function* rootSaga() {
  yield takeEvery(SET_PROJECT, watchSetProject);
  yield takeLatest(GET_ALL_PROJECTS, watchGetAllProjects);
  yield takeLatest(DELETE_PROJECT, watchDeleteProject);
}
