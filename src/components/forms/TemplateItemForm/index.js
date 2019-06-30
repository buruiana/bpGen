import { connect } from "react-redux";
import get from "lodash/get";
import {
  setTemplate,
  getAllTemplates
} from "../../../services/templatesService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import TemplateItemForm from "./templateItemForm";
import { setTemplateTree } from '../../../services/templatesService/actions';
import { addModal, setModalData } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    userid: get(state, "loginReducer.userInfo.user.uid", "aaa"),
    templates: state.templatesReducer.templates,
    tree: state.templatesReducer.tree,
    modalData: state.modalsReducer.modalData
  };
};

const mapDispatchToProps = {
  setTemplate,
  generateCode,
  getAllTemplates,
  setTemplateTree,
  addModal,
  setModalData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateItemForm);
