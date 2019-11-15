import ComponentPropsForm from "./componentPropsForm";
import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setComponent } from '../../../services/componentsService';
import { setTree } from '../../../services/sortableTreeService/actions';
import { generateCode } from '../../../services/codeGenerationService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsReducer.projectSettings,
    templates: state.templatesReducer.templates,
    tree: state.sortableTreeReducer.tree,
    modalData: state.modalsReducer.modalData,
    forms: state.customFormReducer.forms,
  };
};

const mapDispatchToProps = {
  removeModal,
  setCustomForm,
  setComponent,
  setTree,
  generateCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentPropsForm);
