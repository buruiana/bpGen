import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import {
  deleteProvider,
  setProvider,
  getAllProviders,
} from '../../../services/providersService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    technos: state.technosReducer.technos,
    providers: state.providersReducer.providers,
    searchData: state.filterDataReducer.searchData,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasProvidersImport: state.configsReducer.configs.hasProvidersImport,
  }
}

const mapDispatchToProps = {
  deleteProvider,
  setProvider,
  getAllProviders,
  importData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersListView);