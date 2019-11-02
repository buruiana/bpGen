import { connect } from "react-redux";
import { setTechno } from '../../../services/technosService/actions';
import TechnosForm from './technosForm';

const mapStateToProps = state => {
  return {
    technos: state.technosReducer.technos,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setTechno: techno => setTechno(techno),
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnosForm);