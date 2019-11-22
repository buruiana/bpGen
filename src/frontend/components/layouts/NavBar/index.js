import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginService/actions";
import { addModal } from '../../../services/modalService/actions';
import { initProject } from '../../../services/customFormService/actions';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    projectSettings: state.customFormReducer.forms.projectSettings,
    router: state.router,
    currentTemplate: state.customFormReducer.forms.currentTemplate,
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
