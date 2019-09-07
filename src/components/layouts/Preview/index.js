import Preview from "./preview";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  forms: state.customFormReducer.forms,
  generatedCode: state.codeGenerationReducer.code
});

export default connect(
  mapStateToProps
)(Preview);
