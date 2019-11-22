import ProjectSettingsForm from "./projectSettingsForm";
import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setCurrentTemplate } from '../../../services/templatesService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.customFormReducer.forms.projectSettings,
    templates: state.templatesReducer.templates,
    forms: state.customFormReducer.forms
  };
};

const mapDispatchToProps = {
  removeModal,
  setCustomForm,
  setCurrentTemplate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSettingsForm);
