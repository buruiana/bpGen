import { connect } from "react-redux";
import GenericModal from "./genericModal";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => ({
  currentTemplate: state.customFormReducer.forms.currentTemplate,
});

const mapDispatchToProps = {
  removeModal: () => removeModal()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericModal);
