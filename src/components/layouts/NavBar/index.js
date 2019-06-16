import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginFormService/actions";
import { getAllProviders } from "../../../services/providersService/actions";
import { getAllTechnos } from "../../../services/technosService/actions";
import { getAllPropTypes } from "../../../services/propTypesService/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginFormReducer.isAuthenticated,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
  };
};

const mapDispatchToProps = {
  logout,
  getAllProviders,
  getAllTechnos,
  getAllPropTypes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
