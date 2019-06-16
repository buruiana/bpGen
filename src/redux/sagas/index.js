import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";
import templatesFormSaga from "../../services/templatesFormService";
import codeGenerationSaga from "../../services/codeGenerationService";
import providersSaga from "../../services/providersService";
import technosSaga from "../../services/technosService";

export default function* sagas() {
  yield all(
    [loginFormSaga, templatesFormSaga, codeGenerationSaga, providersSaga, technosSaga].map(saga =>
      fork(saga)
    )
  );
}
