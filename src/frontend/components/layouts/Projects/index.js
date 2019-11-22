import { connect } from "react-redux";
import ProjectsListView from './projectsListView';
import {
  deleteProject,
  setProject,
  setCurrentProject,
  getAllProjects,
  setProjectTree
} from '../../../services/projectsService/actions';
import { setCustomForm } from '../../../services/customFormService/actions';
import { setCurrentTemplate } from "../../../services/templatesService/actions";
import { importData } from '../../../services/configsService/actions';
import { generateCode } from "../../../services/codeGenerationService/actions";

const mapStateToProps = state => {
  return {
    technos: state.technosReducer.technos,
    projects: state.projectsReducer.projects,
    searchData: state.filterDataReducer.searchData,
    providers: state.providersReducer.providers,
    isAuthenticated: state.loginReducer.isAuthenticated,
    templates: state.templatesReducer.templates,
    currentTemplate: state.customFormReducer.forms.currentTemplate,
    hasProjectsImport: state.configsReducer.configs.hasProjectsImport,
  }
}

const mapDispatchToProps = {
  deleteProject,
  setProject,
  getAllProjects,
  setProjectTree,
  setCurrentProject,
  setCustomForm,
  setCurrentTemplate,
  importData,
  generateCode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsListView);