import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";
import { setTree } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
  components: state.componentsReducer.components,
  providers: state.providersReducer.providers,
  defaultTree: state.sortableTreeReducer.defaultTree,
  tree: state.sortableTreeReducer.tree,
  projectError: state.projectSettingsReducer.projectError,
  searchData: state.filterDataReducer.searchData,
  forms: state.customFormReducer.forms
});

const mapDispatchToProps = {
  addModal,
  setTree,
  setCustomForm,
  generateCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
