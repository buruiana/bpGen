import { connect } from "react-redux";
import TemplatesListView from './templatesListView';
import {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
  setTemplateTree
} from '../../../services/templatesService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    templates: state.templatesReducer.templates,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasTemplatesImport: state.configsReducer.configs.hasTemplatesImport,
  }
}

const mapDispatchToProps = {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
  setTemplateTree,
  importData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesListView);