import { connect } from "react-redux";
import { setTemplate } from "../../../services/templatesFormService/actions";
import TemplatesForm from "./templatesForm";

const mapStateToProps = state => {
  return {
    userid: state.loginFormReducer.userInfo.user.uid
  };
};

const mapDispatchToProps = {
  setTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesForm);
