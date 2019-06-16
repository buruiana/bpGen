import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginFormService/actions";
import { getAllProviders } from "../../../services/providersService/actions";
import { getAllTechnos } from "../../../services/technosService/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginFormReducer.isAuthenticated,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos
  };
};

const mapDispatchToProps = {
  logout,
  getAllProviders,
  getAllTechnos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
