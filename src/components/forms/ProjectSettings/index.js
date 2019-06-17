import ProjectSettingsForm from "./projectSettingsForm";
import { connect } from "react-redux";
import { setProjectSettings } from "../../../services/projectSettingsService/actions";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsReducer.projectSettings,
    technos: state.technosReducer.technos,
    templates: state.templatesReducer.templates
  };
};

const mapDispatchToProps = {
  setProjectSettings,
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSettingsForm);
