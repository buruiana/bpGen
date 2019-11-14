import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const ProjectsListView = props => {
  const {
    projects = [],
    searchData,
    deleteProject,
    setProject,
    isAuthenticated,
    setTree,
    setCustomForm,
    setProjectSettings,
    templates,
    setCurrentTemplate,
    generateCode,
    hasProjectsImport,
    importData,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { PROJECTS } = availablecomponents;
  let fileReader;

  const deleteSelectedProject = event => deleteProject({ _id: event.target.id });
  const onClick = event => {
    const project = projects.filter(e => e._id === event.target.id);

    const newCurrentTemplate = templates.filter(t => t._id === project[0].forms.projectSettings.projectTemplate)

    setCurrentTemplate(newCurrentTemplate[0]);
    setTree({ treeData2: project[0].tree });
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
    const filteredProjects = projects.filter(el => {
      if (searchData.title) {
        return (
          el.title
            .toLowerCase()
            .includes(get(searchData, "title", el.title).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredProjects, el => el.title);
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
      const { _id, title } = project;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={onClick}>{title}</a>
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
    <div>
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
