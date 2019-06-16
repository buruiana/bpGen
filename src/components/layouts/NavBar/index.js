import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginFormService/actions";
import { getAllProviders } from "../../../services/providersService/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginFormReducer.isAuthenticated,
    providers: state.providersReducer.providers
  };
};

const mapDispatchToProps = {
  logout,
  getAllProviders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
