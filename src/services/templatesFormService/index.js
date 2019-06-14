import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import {
  SET_TEMPLATE,
  DELETE_TEMPLATE,
  GET_ALL_TEMPLATES
} from "./actionTypes";
import rsf from "../../redux/firebaseConfig";
import { setAllIngredients, getAllIngredients } from "./actions";
//import { mock } from "./mock";

export function* watchSetTemplate(action) {
  const { template } = action;
  console.log("console: templatetemplate", { template });
  const { isOffline } = (yield select()).configsReducer;

  if (!isOffline) {
    if (template.id) {
      yield call(
        rsf.firestore.setDocument,
        `templates/${template.id}`,
        template
      );
    } else {
      yield call(rsf.firestore.addDocument, `templates`, {
        item: { template }
      });
    }
    yield put(getAllTemplates());
  }
}

export function* watchGetAllTemplates(action) {
  let allTemplates = [];
  const { isOffline } = (yield select()).configsReducer;

  if (isOffline) {
    allTemplates = mock.allTemplates;
  } else {
    const snapshot = yield call(rsf.firestore.getCollection, "templates");
    allTemplates = snapshot.docs.map(template => {
      return { ...template.data(), id: template.id };
    });
  }
  if (isEmpty(allTemplates)) allTemplates = [];
  sortBy(allTemplates, el => el.title);
  yield put(setAllTemplates(allTemplates));
}

export function* watchDeleteTemplate(action) {
  const { id } = action.template;
  const { isOffline } = (yield select()).configsReducer;

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
