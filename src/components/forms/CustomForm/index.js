import { connect } from "react-redux";
import { setCustomForm } from "../../../services/customFormService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import CustomForm from "./customForm";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  flatForms: state.projectSettingsReducer.projectSettings.flatForms,
  forms: state.customFormReducer.forms
});

const mapDispatchToProps = {
  setCustomForm,
  removeModal,
  generateCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomForm);
