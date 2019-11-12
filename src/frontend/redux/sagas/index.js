import { fork, all } from "redux-saga/effects";
import loginSaga from "../../services/loginService";
import templatesSaga from "../../services/templatesService";
import codeGenerationSaga from "../../services/codeGenerationService";
import providersSaga from "../../services/providersService";
import technosSaga from "../../services/technosService";
import componentsSaga from "../../services/componentsService";
import propTypesSaga from "../../services/propTypesService";
import aceTabsSaga from "../../services/aceTabsService";
import backEndSaga from "../../services/backEndService";
import configsSaga from "../../services/configsService";
import projectsSaga from "../../services/projectsService";
import alertSaga from "../../services/alertService";

export default function* sagas() {
  yield all(
    [
      loginSaga,
      templatesSaga,
      codeGenerationSaga,
      providersSaga,
      technosSaga,
      componentsSaga,
      propTypesSaga,
      aceTabsSaga,
      backEndSaga,
      configsSaga,
      projectsSaga,
      alertSaga,
    ].map(saga => fork(saga))
  );
}
