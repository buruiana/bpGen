import ComponentSearchForm from './componentSearchForm';
import { connect } from "react-redux";
import { setComponent, setFilterData } from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    projectDestination: state.projectSettingsServiceReducer.projectDestination,
    pathname: state.routing.locationBeforeTransitions.pathname,
    searchData: state.componentsServiceReducer.searchData,
  }
}

const mapDispatchToProps = {
  setComponent: componnet => setComponent(componnet),
  setFilterData: filterData => setFilterData(filterData),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentSearchForm);