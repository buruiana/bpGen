import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';
import { getTechnoName } from '../../../utils';

const ProjectsListView = props => {
  const {
    projects = [],
    technos=[],
    searchData,
    deleteProject,
    setProject,
    isAuthenticated,
    setCustomForm,
    setProjectSettings,
    templates,
    setCurrentTemplate,
    generateCode,
    hasProjectsImport,
    importData,
    setProjectTree,
    setCurrentProject,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { PROJECTS } = availablecomponents;
  let fileReader;

  const deleteSelectedProject = event => deleteProject({ _id: event.target.id });
  const onClick = event => {
    const project = projects.filter(e => e._id === event.target.id);

    const newCurrentTemplate = templates.filter(t => t._id === project[0].forms.projectSettings.projectTemplate)

    setCurrentProject(project);
    setCurrentTemplate(newCurrentTemplate[0]);
    setProjectTree(project[0].forms.tree);
    setCustomForm(project[0].forms);
    setProjectSettings(project[0].forms.projectSettings);
    generateCode()

    navigate('/editor');
  };
  const duplicateSelectedProject = event => {
    const currentProject = projects.filter(
      project => project._id === event.target.id
    )[0];

    setProject({
      ...currentProject,
      title: `${currentProject.title}-duplicate`,
      _id: undefined
    });
  };

  const filteredItems = () => {
    const filteredComponents = projects.filter(el => {
      if (!isEmpty(searchData) && searchData.title) {
        return (el.title.toLowerCase().indexOf(searchData.title.toLowerCase()) !== -1
          && get(searchData, 'techno', el.techno) === el.techno);
      }
      return get(searchData, 'techno', el.techno) === el.techno;
    });

    return sortBy(filteredComponents, el => el.title);
  };

  const handleFileRead = e => {
    const projects = new Function(fileReader.result)();
    const list = {
      data: projects,
      importType: 'projects'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const projectsList = () => {
    return filteredItems().map(project => {
      const { _id, title, techno } = project;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={onClick}>{title}</a>
          </td>
          <td>
            <a id={_id} className="simpleLink" onClick={onClick}>{getTechnoName(technos, techno)}</a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={duplicateSelectedProject}>
              Duplicate
            </a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedProject}>
              Delete
            </a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div className='wrapper'>
      <GenericSearchForm componentname={PROJECTS} />
      { hasProjectsImport &&
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div>
      }
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/editor")}>
          New Project
      </a>
      </div>
      <Table striped bordered hover>
        <tbody>{projectsList()}</tbody>
      </Table>
    </div>
  );
};

export default ProjectsListView;
