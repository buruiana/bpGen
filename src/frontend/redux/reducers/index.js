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
import filterDataReducer from "../../services/filterDataService/reducer";
import projectSettingsReducer from "../../services/projectSettingsService/reducer";
import customFormReducer from "../../services/customFormService/reducer";
import codeGenerationReducer from "../../services/codeGenerationService/reducer";
import aceTabsReducer from "../../services/aceTabsService/reducer";
import backEndReducer from "../../services/backEndService/reducer";
import sortableTreeReducer from "../../services/sortableTreeService/reducer";
import projectsReducer from "../../services/projectsService/reducer";
import alertReducer from "../../services/alertService/reducer";
import usersReducer from "../../services/usersService/reducer";

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
    projectsReducer,
    propTypesReducer,
    filterDataReducer,
    projectSettingsReducer,
    customFormReducer,
    codeGenerationReducer,
    aceTabsReducer,
    backEndReducer,
    //sortableTreeReducer,
    alertReducer,
    usersReducer,
  });
