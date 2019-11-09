import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_TEMPLATE,
  DELETE_TEMPLATE,
  GET_ALL_TEMPLATES
} from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllTemplates, getAllTemplates } from "./actions";
import { mock } from "./mock";

export function* watchSetTemplate(action) {
  const { template } = action;
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo.user.uid;

  if (!isOffline) {
    if (template.id) {
      yield call(
        rsf.firestore.setDocument,
        `templates/${template.id}`,
        { ...template, userid }
      );
    } else {
      yield call(rsf.firestore.addDocument, `templates`, template);
    }
    yield put(getAllTemplates());
  }
}

export function* watchGetAllTemplates(action) {
  const { isOffline } = (yield select()).configsReducer.configs;
  const userid = (yield select()).loginReducer.userInfo.user.uid;
  let templateArr = [];
  if (isOffline) {
    templateArr = mock.allTemplates;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "templates");
    snapshot.docs.filter(template => {
      const newTemplate = { ...template.data(), id: template.id };

      if (newTemplate.userid === userid || newTemplate.templateIsPublic) {
        templateArr.push(newTemplate);
      }
    });
  }
  //if (isEmpty(templateArr)) templateArr = [];
  sortBy(templateArr, el => el.title);
  yield put(setAllTemplates(templateArr));
}

export function* watchDeleteTemplate(action) {
  const { id } = action.template;
  const { isOffline } = (yield select()).configsReducer.configs;

  if (!isOffline) {
    yield call(rsf.firestore.deleteDocument, `templates/${id}`);
    yield put(getAllTemplates());
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_TEMPLATE, watchSetTemplate);
  yield takeLatest(GET_ALL_TEMPLATES, watchGetAllTemplates);
  yield takeLatest(DELETE_TEMPLATE, watchDeleteTemplate);
}
