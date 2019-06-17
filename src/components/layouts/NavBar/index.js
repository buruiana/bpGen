import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../../services/loginService/actions";
import { getAllProviders } from "../../../services/providersService/actions";
import { getAllTechnos } from "../../../services/technosService/actions";
import { getAllPropTypes } from "../../../services/propTypesService/actions";
import { getAllTemplates } from "../../../services/templatesService/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
    templates: state.templatesReducer.templates,
  };
};

const mapDispatchToProps = {
  logout,
  getAllProviders,
  getAllTechnos,
  getAllPropTypes,
  getAllTemplates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
