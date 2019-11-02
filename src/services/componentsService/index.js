import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { SET_COMPONENT, GET_ALL_COMPONENTS, DELETE_COMPONENT } from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllComponents, getAllComponents } from "./actions";
import { exportModules } from '../backEndService/actions';
import { getExportModulesCode } from './helper';
import { mock } from "./mock";

export function* watchSetComponent(action) {
  const { component } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const { components } = (yield select()).componentsReducer;

  if (!isOffline) {
    if (component.id) {
      yield call(rsf.firestore.setDocument, `components/${component.id}`, component);
    } else {
      yield call(rsf.firestore.addDocument, `components`, component);
    }
    yield put(getAllComponents());
  }
  //yield put(exportModules(getExportModulesCode(components)));
}

export function* watchGetAllComponents(action) {
  const userid = (yield select()).loginReducer.userInfo.user.uid;
  const { isOffline } = (yield select()).configsReducer.configs;
  const componentsArr = [];

  if (isOffline) {
    allComponents = mock.allComponents;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "components");
    snapshot.docs.filter(component => {
      const newComponent = component.data();

      if (newComponent.userid === userid || newComponent.isPublic) {
        componentsArr.push(newComponent);
      }
    });
  }
  if (isEmpty(componentsArr)) componentsArr = [];
  sortBy(componentsArr, el => el.title);
  yield put(setAllComponents(componentsArr));
}

export function* watchDeleteComponent(action) {
  const { id } = action.component;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `components/${id}`);
    yield put(getAllComponents());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_COMPONENT, watchSetComponent);
  yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
  yield takeLatest(DELETE_COMPONENT, watchDeleteComponent);
}
