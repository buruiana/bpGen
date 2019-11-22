import ProjectSettings from "./projectSettings";
import { connect } from "react-redux";
import get from 'lodash/get';
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    projectName: get(state, 'customFormReducer.projectSettings.projectName', ''),
    projectType: get(state, 'customFormReducer.projectSettings.projectType', ''),
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSettings);
