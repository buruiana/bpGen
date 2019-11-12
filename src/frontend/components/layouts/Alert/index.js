import { connect } from "react-redux";
import AlertComponent from "./alert";
import { logout } from "../../../services/loginService/actions";
import { addModal } from '../../../services/modalService/actions';
import { initProject } from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    projectSettings: state.projectSettingsReducer.projectSettings,
    router: state.router,
    alertData: state.alertReducer,
  };
};

const mapDispatchToProps = {
  logout,
  addModal,
  initProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertComponent);
