import { connect } from "react-redux";
import TechnosListView from './technosListView';
import {
  deleteTechno,
  setTechno,
  getAllTechnos,
} from '../../../services/technosService/actions';
import { importData } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    technos: state.technosReducer.technos,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
    hasTechnosImport: state.configsReducer.configs.hasTechnosImport,
  }
}

const mapDispatchToProps = {
  deleteTechno,
  setTechno,
  getAllTechnos,
  importData,
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnosListView);