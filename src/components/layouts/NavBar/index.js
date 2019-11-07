import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginService/actions";
import { addModal } from '../../../services/modalService/actions';
import { initProject } from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    projectSettings: state.projectSettingsReducer.projectSettings,
    router: state.router,
    currentTemplate: state.templatesReducer.currentTemplate,
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
)(NavBar);
