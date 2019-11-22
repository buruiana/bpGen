import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    projectSettings: state.customFormReducer.forms.projectSettings,
    isAuthenticated: state.loginReducer.isAuthenticated,
    currentTemplate: state.customFormReducer.forms.currentTemplate,
  };
};

export default connect(mapStateToProps)(App);
