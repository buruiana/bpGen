import { connect } from "react-redux";
import ProjectsListView from './projectsListView';
import {
  deleteProject,
  setProject,
  getAllProjects,
  setProjectTree
} from '../../../services/projectsService/actions';
import { setTree } from "../../../services/sortableTreeService/actions";
import { setCustomForm } from '../../../services/customFormService/actions';
import { setProjectSettings } from "../../../services/projectSettingsService/actions";
import { setCurrentTemplate } from "../../../services/templatesService/actions";

const mapStateToProps = state => {
  return {
    projects: state.projectsReducer.projects,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
    templates: state.templatesReducer.templates,
  }
}

const mapDispatchToProps = {
  deleteProject,
  setProject,
  getAllProjects,
  setProjectTree,
  setTree,
  setCustomForm,
  setProjectSettings,
  setCurrentTemplate,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsListView);