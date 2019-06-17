import { connect } from "react-redux";
import { setProvider } from '../../../services/providersService/actions';
import ProvidersForm from './providersForm';

const mapStateToProps = state => {
  return {
    providers: state.providersReducer.providers,
  }
};

const mapDispatchToProps = {
  setProvider: provider => setProvider(provider),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersForm);