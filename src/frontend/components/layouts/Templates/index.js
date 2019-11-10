import { connect } from "react-redux";
import TemplatesListView from './templatesListView';
import {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
  setTemplateTree
} from '../../../services/templatesService/actions';

const mapStateToProps = state => {
  return {
    templates: state.templatesReducer.templates,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
}

const mapDispatchToProps = {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
  setTemplateTree,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesListView);