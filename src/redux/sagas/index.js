import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";
import templatesFormSaga from "../../services/templatesFormService";

export default function* sagas() {
  yield all([loginFormSaga, templatesFormSaga].map(saga => fork(saga)));
}
