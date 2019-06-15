import { connect } from "react-redux";
import get from "lodash/get";
import {
  setTemplate,
  getAllTemplates
} from "../../../services/templatesFormService/actions";
import { generateCode } from "../../../services/codeGenerationService/actions";
import TemplatesForm from "./templatesForm";

const mapStateToProps = state => {
  return {
    userid: get(state, "loginFormReducer.userInfo.user.uid", "aaa")
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
