import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_PROJECT,
  DELETE_PROJECT,
  GET_ALL_PROJECTS
} from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllProjects, getAllProjects } from "./actions";
import { mock } from "./mock";

export function* watchSetProject(action) {
  const { project } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo.user.uid;
  console.log('console: oooooooooooooooooooooooo', action);
  if (!isOffline) {
    if (project.id) {
      yield call(
        rsf.firestore.setDocument,
        `projects/${project.id}`,
        { ...project, userid }
      );
    } else {
      yield call(rsf.firestore.addDocument, `projects`, project);
    }
    yield put(getAllProjects());
  }
}

export function* watchGetAllProjects(action) {
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo.user.uid;
  let projectArr = [];
  if (isOffline) {
    projectArr = mock.allProjects;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "projects");
    snapshot.docs.filter(project => {
      const newProject = project.data();

      if (newProject.userid === userid || newProject.projectIsPublic) {
        projectArr.push(newProject);
      }
    });
  }
  if (isEmpty(projectArr)) projectArr = [];
  sortBy(projectArr, el => el.title);
  yield put(setAllProjects(projectArr));
}

export function* watchDeleteProject(action) {
  const { id } = action.project;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `projects/${id}`);
    yield put(getAllProjects());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT, watchSetProject);
  yield takeLatest(GET_ALL_PROJECTS, watchGetAllProjects);
  yield takeLatest(DELETE_PROJECT, watchDeleteProject);
}
