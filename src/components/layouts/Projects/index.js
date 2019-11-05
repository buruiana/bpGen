import { connect } from "react-redux";
import ProjectsListView from './projectsListView';
import {
  deleteProject,
  setProject,
  getAllProjects,
  setProjectTree
} from '../../../services/projectsService/actions';

const mapStateToProps = state => {
  return {
    projects: state.projectsReducer.projects,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
}

const mapDispatchToProps = {
  deleteProject,
  setProject,
  getAllProjects,
  setProjectTree,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsListView);