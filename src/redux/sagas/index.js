import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";

export default function* sagas() {
  yield all([
    loginFormSaga,
  ].map(saga => fork(saga)));
}
