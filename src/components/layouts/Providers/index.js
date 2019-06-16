import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import {
  deleteProvider,
  setProvider,
  getAllProviders,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersReducer.providers,
    searchData: state.filterDataReducer.searchData,
  }
}

const mapDispatchToProps = {
  deleteProvider: provider => deleteProvider(provider),
  setProvider: provider => setProvider(provider),
  getAllProviders: () => getAllProviders(),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersListView);