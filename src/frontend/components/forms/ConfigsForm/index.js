import { connect } from "react-redux";
import { setConfigs } from "../../../services/configsService/actions";
import ConfigsForm from "./configsForm";

const mapStateToProps = state => {
  return {
    configs: state.configsReducer.configs,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setConfigs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigsForm);
