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
    searchData: state.technosReducer.searchData,
  }
}

const mapDispatchToProps = {
  deleteTechno: techno => deleteTechno(techno),
  setTechno: techno => setTechno(techno),
  getAllTechnos: () => getAllTechnos(),
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnosListView);