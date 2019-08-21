import { connect } from "react-redux";
import get from "lodash/get";
import {
  setTemplate,
  getAllTemplates
} from "../../../services/templatesService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import TemplatesForm from "./templatesFormTree";
import { setTemplateTree } from "../../../services/templatesService/actions";
import { addModal } from "../../../services/modalService/actions";

const mapStateToProps = state => {
  return {
    userid: get(state, "loginReducer.userInfo.user.uid", "aaa"),
    templates: state.templatesReducer.templates,
    tree: state.templatesReducer.tree
  };
};

const mapDispatchToProps = {
  setTemplate,
  generateCode,
  getAllTemplates,
  setTemplateTree,
  addModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesForm);
