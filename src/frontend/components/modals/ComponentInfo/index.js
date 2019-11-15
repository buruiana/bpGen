import ComponentInfo from './componentInfo';

import { connect } from "react-redux";
import { removeModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    modals: state.modalsReducer.modals,
    modalData: state.modalsReducer.modalData,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
  };
};

const mapDispatchToProps = {
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentInfo);
