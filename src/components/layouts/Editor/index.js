import Editor from "./editor";
import { connect } from "react-redux";

import { addModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings
});

const mapDispatchToProps = {
  addModal: modal => addModal(modal)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
