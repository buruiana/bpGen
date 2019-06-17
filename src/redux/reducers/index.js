import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import configsReducer from "../../services/configsService/reducer";
import modalsReducer from "../../services/modalService/reducer";
import loginReducer from "../../services/loginService/reducer";
import templatesReducer from "../../services/templatesService/reducer";
import providersReducer from "../../services/providersService/reducer";
import technosReducer from "../../services/technosService/reducer";
import componentsReducer from "../../services/componentsService/reducer";
import propTypesReducer from "../../services/propTypesService/reducer";
import genericFormReducer from "../../services/genericFormService/reducer";
import filterDataReducer from "../../services/filterDataService/reducer";
import projectSettingsReducer from "../../services/projectSettingsService/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    configsReducer,
    modalsReducer,
    loginReducer,
    templatesReducer,
    providersReducer,
    technosReducer,
    componentsReducer,
    propTypesReducer,
    genericFormReducer,
    filterDataReducer,
    projectSettingsReducer
  });
