import { connect } from "react-redux";
import get from "lodash/get";
import {
  setTemplate,
  getAllTemplates
} from "../../../services/templatesService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import TemplateItemForm from "./templateItemForm";
import { setTemplateTree } from '../../../services/templatesService/actions';
import { addModal, removeModal } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    userid: get(state, "loginReducer.userInfo._id", ""),
    templates: state.templatesReducer.templates,
    tree: state.templatesReducer.tree,
    modalData: state.modalsReducer.modalData,
    technos: state.technosReducer.technos,
  };
};

const mapDispatchToProps = {
  setTemplate,
  generateCode,
  getAllTemplates,
  setTemplateTree,
  addModal,
  removeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateItemForm);
