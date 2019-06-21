import { connect } from "react-redux";
import Ace from "./ace";

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
  aceTab: state.aceTabsReducer.aceTab,
  aceTabs: state.aceTabsReducer.aceTabs,
  code: state.codeGenerationReducer.code
});

export default connect(mapStateToProps)(Ace);
