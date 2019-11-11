import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_TEMPLATE,
  DELETE_TEMPLATE,
  GET_ALL_TEMPLATES
} from "./actionTypes";

import { getAllTemplates } from "./actions";
import { mock } from "./mock";

import {
  create,
  update,
  getCollection
} from '../backEndService/actions';


export function* watchSetTemplate(action) {
  const { template } = action;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    if (template._id) {
      yield put(update('templates', template));
    } else {
      yield put(create('templates', template));
    }
    yield put(getAllTemplates());
  }
}

export function* watchGetAllTemplates(action) {
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo._id;
  let templateArr = [];
  if (isOffline) {
    templateArr = mock.allTemplates || [];
  } else {
    // const snapshot = yield call(rsf.firestore.getCollection, "templates");
    // snapshot.docs.filter(template => {
    //   const newTemplate = { ...template.data(), id: template.id };

    //   if (newTemplate.userid === userid || newTemplate.templateIsPublic) {
    //     templateArr.push(newTemplate);
    //   }
    // });
    yield put(getCollection('templates', {}));
  }
  //if (isEmpty(templateArr)) templateArr = [];
  // sortBy(templateArr, el => el.title);
  // yield put(setAllTemplates(templateArr));
}

export function* watchDeleteTemplate(action) {
  const { _id } = action.template;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield put(remove('templates', _id));
    yield put(getAllTemplates());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_TEMPLATE, watchSetTemplate);
  yield takeLatest(GET_ALL_TEMPLATES, watchGetAllTemplates);
  yield takeLatest(DELETE_TEMPLATE, watchDeleteTemplate);
}
