import { connect } from "react-redux";
import { setFilterData } from '../../../services/providersService/actions';
import ProviderSearchForm from './providerSearchForm';

const mapStateToProps = state => {
  return {
    providers: state.providersReducer.providers,
    searchData: state.providersReducer.searchData,
  }
}

const mapDispatchToProps = {
  setFilterData: filterData => setFilterData(filterData),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSearchForm);