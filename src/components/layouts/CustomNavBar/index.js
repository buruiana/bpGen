import { connect } from "react-redux";
import CustomNavBar from "./customNavBar";
import { addModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings
});

const mapDispatchToProps = {
  addModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNavBar);
