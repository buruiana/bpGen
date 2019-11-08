import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";
import { setTree, setNodePath } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setProject } from '../../../services/projectsService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
  components: state.componentsReducer.components,
  providers: state.providersReducer.providers,
  //tree: state.sortableTreeReducer.tree,
  projectError: state.projectSettingsReducer.projectError,
  searchData: state.filterDataReducer.searchData,
  forms: state.customFormReducer.forms,
  generatedCode: state.codeGenerationReducer.code,
  configs: state.configsReducer,
  currentTemplate: state.templatesReducer.currentTemplate,
});

const mapDispatchToProps = {
  addModal,
  setTree,
  setCustomForm,
  generateCode,
  setNodePath,
  setProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
