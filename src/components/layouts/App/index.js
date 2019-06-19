import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    projectSettings: state.projectSettingsReducer.projectSettings
  };
};

export default connect(mapStateToProps)(App);
