import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";
import { setTree, setNodePath } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";
import { setModalData } from '../../../services/modalService/actions';

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
  generateCode,
  setModalData,
  setNodePath
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
