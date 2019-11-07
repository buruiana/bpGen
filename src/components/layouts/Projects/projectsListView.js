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
  } = props;
  const { PROJECTS } = availablecomponents;

  if (!isAuthenticated) navigate2Login();

  const deleteSelectedProject = event => deleteProject({ id: event.target.id });
  const onClick = event => {
    console.log('console: xxxxxxxxxxxxxx', projects);
    const project = projects.filter(e => e.projectId === event.target.id);
    console.log('console: ooooooooooooooooo', event.target.id, project);
    setTree({ treeData2: project[0].tree });
    setCustomForm(project[0].forms);
    setProjectSettings(project[0].projectSettings);
    navigate('/editor');
  };
  const duplicateSelectedProject = event => {
    const currentProject = projects.filter(
      project => project.id === event.target.id
    )[0];

    setProject({
      ...currentProject,
      id: null,
      name: `${currentProject.name}-duplicate`
    });
  };

  const filteredItems = () => {
    const filteredProjects = projects.filter(el => {
      if (searchData.name) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredProjects, el => el.name);
  };

  const projectsList = () => {
    return filteredItems().map(project => {
      console.log('console: ==============', project);
      const { projectId } = project;
      const { title, description, techno } = project.tree[0];

      return (
        <tr key={projectId}>
          <td>
            <a id={projectId} className="simpleLink" onClick={onClick}>{title}</a>
          </td>
          <td>
            <a id={projectId} className="simpleLink" onClick={onClick}>{description}</a>
          </td>
          <td><a id={projectId} target='blank'>{techno}</a></td>
          <td>
            <a className="simpleLink" id={projectId} onClick={duplicateSelectedProject}>
              Duplicate
            </a>
          </td>
          <td>
            <a className="simpleLink" id={projectId} onClick={deleteSelectedProject}>
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
