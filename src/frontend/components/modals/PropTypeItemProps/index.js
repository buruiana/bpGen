import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";
import PropTypeItemProps from './propTypeItemProps';

const mapStateToProps = state => {
  return {
    modalData: state.modalsReducer.modalData,
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropTypeItemProps);
