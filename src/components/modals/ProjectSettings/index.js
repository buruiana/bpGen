import ProjectSettings from "./projectSettings";
import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    projectName: state.projectSettingsReducer.name,
    projectType: state.projectSettingsReducer.type
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSettings);
