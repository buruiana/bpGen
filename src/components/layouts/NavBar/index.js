import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginFormService/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginFormReducer.isAuthenticated
  };
};

const mapDispatchToProps = {
  logout: () => logout(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
