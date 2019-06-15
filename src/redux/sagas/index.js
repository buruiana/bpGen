import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";
import templatesFormSaga from "../../services/templatesFormService";
import codeGenerationSaga from "../../services/codeGenerationService";

export default function* sagas() {
  yield all(
    [loginFormSaga, templatesFormSaga, codeGenerationSaga].map(saga =>
      fork(saga)
    )
  );
}
