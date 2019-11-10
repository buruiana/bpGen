import ProjectSettingsForm from "./projectSettingsForm";
import { connect } from "react-redux";
import { setProjectSettings } from "../../../services/projectSettingsService/actions";
import { removeModal } from "../../../services/modalService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setCurrentTemplate } from '../../../services/templatesService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsReducer.projectSettings,
    technos: state.technosReducer.technos,
    templates: state.templatesReducer.templates,
    forms: state.customFormReducer.forms
  };
};

const mapDispatchToProps = {
  setProjectSettings,
  removeModal,
  setCustomForm,
  setCurrentTemplate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSettingsForm);
