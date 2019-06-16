import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";
import templatesFormSaga from "../../services/templatesFormService";
import codeGenerationSaga from "../../services/codeGenerationService";
import providersSaga from "../../services/providersService";

export default function* sagas() {
  yield all(
    [loginFormSaga, templatesFormSaga, codeGenerationSaga, providersSaga].map(saga =>
      fork(saga)
    )
  );
}
