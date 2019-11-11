import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_PROJECT,
  DELETE_PROJECT,
  GET_ALL_PROJECTS
} from "./actionTypes";

import { setAllProjects, getAllProjects } from "./actions";
import { mock } from "./mock";

import { create, update } from '../backEndService/actions';

export function* watchSetProject(action) {
  const { project } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (project._id) {
      yield put(update('project', project));
    } else {
      yield put(create('project', project));
    }
    yield put(getAllProjects());
  }
}

export function* watchGetAllProjects(action) {
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;
  let projectArr = [];
  if (isOffline) {
    projectArr = mock.allProjects;
  } else {
    // const snapshot = yield call(rsf.firestore.getCollection, "projects");
    // snapshot.docs.filter(project => {
    //   const newProject = project.data();
    //   console.log('console: newProject', newProject);

    //   if (newProject.userid === userid || newProject.forms.projectSettings.projectIsPublic) {
    //     projectArr.push({
    //       projectId: project.id,
    //       forms: newProject.forms,
    //       userid: newProject.userid,
    //     });
    //   }
    // });
  }
  if (isEmpty(projectArr)) projectArr = [];
  sortBy(projectArr, el => el.title);
  yield put(setAllProjects(projectArr));
}

export function* watchDeleteProject(action) {
  const { _id } = action.project;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('projects', _id));
    yield put(getAllProjects());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT, watchSetProject);
  yield takeLatest(GET_ALL_PROJECTS, watchGetAllProjects);
  yield takeLatest(DELETE_PROJECT, watchDeleteProject);
}
