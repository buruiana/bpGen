import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  deleteComponent,
  setComponent,
  getAllComponents,
} from '../../../services/componentsService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsReducer.components,
    searchData: state.filterDataReducer.searchData,
    hasComponentImport: state.configsReducer.configs.hasComponentImport,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
}

const mapDispatchToProps = {
  deleteComponent,
  setComponent,
  getAllComponents,
  importData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsListView);