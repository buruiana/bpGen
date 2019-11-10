import ComponentInfo from './componentInfo';

import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    modalData: state.modalsReducer.modalData,
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentInfo);
