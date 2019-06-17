import { fork, all } from "redux-saga/effects";
import loginFormSaga from "../../services/loginFormService";
import templatesSaga from "../../services/templatesService";
import codeGenerationSaga from "../../services/codeGenerationService";
import providersSaga from "../../services/providersService";
import technosSaga from "../../services/technosService";
import componentsSaga from "../../services/componentsService";
import propTypesSaga from "../../services/propTypesService";
import genericFormSaga from "../../services/genericFormService";

export default function* sagas() {
  yield all(
    [
      loginFormSaga,
      templatesSaga,
      codeGenerationSaga,
      providersSaga,
      technosSaga,
      componentsSaga,
      propTypesSaga,
      genericFormSaga
    ].map(saga =>
      fork(saga)
    )
  );
}
