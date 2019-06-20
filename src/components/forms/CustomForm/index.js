import { connect } from "react-redux";
import { setCustomForm } from "../../../services/customFormService/actions";
import CustomForm from "./customForm";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  flatForms: state.projectSettingsReducer.projectSettings.flatForms,
  forms: state.customFormReducer.forms,
});

const mapDispatchToProps = {
  setCustomForm,
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomForm);
