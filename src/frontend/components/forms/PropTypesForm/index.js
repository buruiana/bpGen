import { connect } from "react-redux";
import get from 'lodash/get';
import {
  setPropType,
  setPropTypeTree
} from '../../../services/propTypesService/actions';
import { addModal } from "../../../services/modalService/actions";

import PropTypesMainForm from './propTypesMainForm';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesReducer.propTypes,
    tree: state.propTypesReducer.tree,
    providers: state.providersReducer.providers,
    technos: state.technosReducer.technos,
    propTypes: state.propTypesReducer.propTypes,
    userid: get(state, 'loginReducer.userInfo._id', ''),
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = {
  setPropType,
  setPropTypeTree,
  addModal
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesMainForm);