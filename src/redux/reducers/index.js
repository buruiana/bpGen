import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import configsReducer from '../../services/configsService/reducer';
import modalsReducer from '../../services/modalService/reducer';
import loginFormReducer from "../../services/loginFormService/reducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  configsReducer,
  modalsReducer,
  loginFormReducer,
});
