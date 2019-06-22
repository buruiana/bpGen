import { connect } from "react-redux";
import { setComponent } from '../../../services/componentsService/actions';
import ComponentsForm from './componentsForm';

const mapStateToProps = state => {
  return {
    components: state.componentsReducer.components,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
  }
};

const mapDispatchToProps = {
  setComponent: component => setComponent(component),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsForm);