import { connect } from "react-redux";
import PropTypesListView from './propTypesListView';
import {
  deletePropType,
  setPropType,
  getAllPropTypes,
} from '../../../services/propTypesService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesReducer.propTypes,
    searchData: state.filterDataReducer.searchData,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasPropTypesImport: state.configsReducer.configs.hasPropTypesImport,
  }
}

const mapDispatchToProps = {
  deletePropType,
  setPropType,
  getAllPropTypes,
  importData,
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesListView);