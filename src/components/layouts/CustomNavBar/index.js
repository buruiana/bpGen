import { connect } from "react-redux";
import CustomNavBar from "./customNavBar";
import { addModal } from "../../../services/modalService/actions";
import { initProject } from "../../../services/projectSettingsService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings
});

const mapDispatchToProps = {
  addModal,
  initProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNavBar);
