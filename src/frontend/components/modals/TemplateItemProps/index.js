import TemplateItemProps from './templateItemProps';

import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";

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
)(TemplateItemProps);
