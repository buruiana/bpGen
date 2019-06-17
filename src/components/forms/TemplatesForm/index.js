import { connect } from "react-redux";
import get from "lodash/get";
import {
  setTemplate,
  getAllTemplates
} from "../../../services/templatesService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import TemplatesForm from "./templatesForm";

const mapStateToProps = state => {
  return {
    userid: get(state, "loginFormReducer.userInfo.user.uid", "aaa"),
    templates: state.templatesReducer.templates
  };
};

const mapDispatchToProps = {
  setTemplate,
  generateCode,
  getAllTemplates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesForm);
