import { connect } from "react-redux";
import TechnosListView from './technosListView';
import {
  deleteTechno,
  setTechno,
  getAllTechnos,
} from '../../../services/technosService/actions';

const mapStateToProps = state => {
  return {
    technos: state.technosReducer.technos,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
}

const mapDispatchToProps = {
  deleteTechno: techno => deleteTechno(techno),
  setTechno: techno => setTechno(techno),
  getAllTechnos: () => getAllTechnos(),
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnosListView);