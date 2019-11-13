import { connect } from "react-redux";
import get from "lodash/get";
import {
  setPropType,
  getAllPropTypes
} from "../../../services/propTypesService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import PropTypeItemForm from "./propTypeItemForm";
import { setPropTypeTree } from '../../../services/propTypesService/actions';
import { addModal, removeModal } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    userid: get(state, "loginReducer.userInfo._id", "aaa"),
    propTypes: state.propTypesReducer.propTypes,
    tree: state.propTypesReducer.tree,
    modalData: state.modalsReducer.modalData,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
  };
};

const mapDispatchToProps = {
  setPropType,
  generateCode,
  getAllPropTypes,
  setPropTypeTree,
  addModal,
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropTypeItemForm);
