import SpinnerModal from "./spinner";
import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    isLoading: state.configsReducer.isLoading,
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinnerModal);
