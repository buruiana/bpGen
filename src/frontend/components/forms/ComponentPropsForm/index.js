import ComponentPropsForm from "./componentPropsForm";
import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setComponent } from '../../../services/componentsService';
import { setProject } from '../../../services/projectsService/actions';
import { generateCode } from '../../../services/codeGenerationService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsReducer.projectSettings,
    templates: state.templatesReducer.templates,
    //tree: state.sortableTreeReducer.tree,
    tree: state.projectsReducer.tree,
    modalData: state.modalsReducer.modalData,
    forms: state.customFormReducer.forms,
    propTypes: state.propTypesReducer.propTypes,
  };
};

const mapDispatchToProps = {
  removeModal,
  setCustomForm,
  setComponent,
  setProject,
  generateCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentPropsForm);
