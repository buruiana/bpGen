import { connect } from "react-redux";
import TemplatesListView from './templatesListView';
import {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
} from '../../../services/templatesService/actions';

const mapStateToProps = state => {
  return {
    templates: state.templatesReducer.templates,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
  }
}

const mapDispatchToProps = {
  deleteTemplate,
  setTemplate,
  getAllTemplates,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesListView);