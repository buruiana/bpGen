import { connect } from "react-redux";
import AceTabs from './aceTabs';

const mapStateToProps = state => ({
  projectSettings: state.projectSettingsReducer.projectSettings,
});

export default connect(mapStateToProps)(AceTabs);