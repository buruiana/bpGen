import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
  components: state.componentsReducer.components,
  providers: state.providersReducer.providers,
  defaultTree: state.sortableTreeReducer.defaultTree,
  tree: state.sortableTreeReducer.tree,
});

const mapDispatchToProps = {
  addModal: modal => addModal(modal)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
