import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";
//import { setTree, setNodePath } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setProjectTree } from '../../../services/projectsService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
  components: state.componentsReducer.components,
  providers: state.providersReducer.providers,
  technos: state.technosReducer.technos,
  templates: state.templatesReducer.templates,
  projectError: state.projectSettingsReducer.projectError,
  searchData: state.filterDataReducer.searchData,
  forms: state.customFormReducer.forms,
  generatedCode: state.codeGenerationReducer.code,
  configs: state.configsReducer,
  currentTemplate: state.templatesReducer.currentTemplate,
  isAuthenticated: state.loginReducer.isAuthenticated,
});

const mapDispatchToProps = {
  addModal,
  setProjectTree,
  setCustomForm,
  generateCode,
  //setNodePath,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
