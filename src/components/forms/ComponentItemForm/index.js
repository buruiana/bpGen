import { connect } from "react-redux";
import get from "lodash/get";
import {
  setComponent,
  getAllComponents
} from "../../../services/componentsService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import ComponentItemForm from "./componentItemForm";
import { setComponentTree } from '../../../services/componentsService/actions';
import { addModal, removeModal } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    userid: get(state, "loginReducer.userInfo.user.uid", "aaa"),
    components: state.componentsReducer.components,
    tree: state.componentsReducer.tree,
    modalData: state.modalsReducer.modalData,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
  };
};

const mapDispatchToProps = {
  setComponent,
  generateCode,
  getAllComponents,
  setComponentTree,
  addModal,
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentItemForm);
