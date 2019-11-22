import { connect } from "react-redux";
import AceTabs from "./aceTabs";
import { setAceTab } from "../../../services/aceTabsService/actions";

const mapStateToProps = state => ({
  currentTemplate: state.customFormReducer.forms.currentTemplate,
  aceTab: state.aceTabsReducer.aceTab,
  aceTabs: state.aceTabsReducer.aceTabs
});

const mapDispatchToProps = {
  setAceTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AceTabs);
