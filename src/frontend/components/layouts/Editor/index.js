import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";
//import { setTree, setNodePath } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setProject, setProjectTree } from '../../../services/projectsService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";

const mapStateToProps = state => ({
  currentProject: state.projectsReducer.currentProject,
  projectSettings: state.customFormReducer.forms.projectSettings,
  components: state.componentsReducer.components,
  providers: state.providersReducer.providers,
  technos: state.technosReducer.technos,
  templates: state.templatesReducer.templates,
  projectError: state.customFormReducer.forms.projectSettings.projectError,
  searchData: state.filterDataReducer.searchData,
  forms: state.customFormReducer.forms,
  generatedCode: state.codeGenerationReducer.code,
  configs: state.configsReducer,
  currentTemplate: state.customFormReducer.forms.currentTemplate,
  isAuthenticated: state.loginReducer.isAuthenticated,
});

const mapDispatchToProps = {
  addModal,
  setProject,
  setProjectTree,
  setCustomForm,
  generateCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
