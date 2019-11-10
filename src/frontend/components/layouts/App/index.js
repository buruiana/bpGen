import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    projectSettings: state.projectSettingsReducer.projectSettings,
    isAuthenticated: state.loginReducer.isAuthenticated,
    currentTemplate: state.templatesReducer.currentTemplate,
  };
};

export default connect(mapStateToProps)(App);
