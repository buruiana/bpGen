import { connect } from "react-redux";
import { setFilter } from '../../../services/filterDataService/actions';
import GenericSearchForm from './genericSearchForm';

const mapStateToProps = state => {
  return {
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    searchData: state.providersReducer.searchData,
  }
}

const mapDispatchToProps = {
  setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericSearchForm);