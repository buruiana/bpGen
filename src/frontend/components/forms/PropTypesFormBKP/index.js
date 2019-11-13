import { connect } from "react-redux";
import { setPropType } from '../../../services/propTypesService/actions';
import PropTypesForm from './propTypesForm';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesReducer.propTypes,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setPropType: propType => setPropType(propType),
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesForm);