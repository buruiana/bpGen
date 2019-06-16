import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  deleteComponent,
  setComponent,
  getAllComponents,
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsReducer.components,
    searchData: state.componentsReducer.searchData,
  }
}

const mapDispatchToProps = {
  deleteComponent: component => deleteComponent(component),
  setComponent: component => setComponent(component),
  getAllComponents: () => getAllComponents(),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsListView);