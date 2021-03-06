import { connect } from "react-redux";
import get from 'lodash/get';
import {
  setComponent,
  setComponentTree
} from '../../../services/componentsService/actions';
import { addModal } from "../../../services/modalService/actions";

import ComponentsMainForm from './componentsMainForm';

const mapStateToProps = state => {
  return {
    components: state.componentsReducer.components,
    tree: state.componentsReducer.tree,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
    userid: get(state, 'loginReducer.userInfo._id', ''),
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setComponent,
  setComponentTree,
  addModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsMainForm);