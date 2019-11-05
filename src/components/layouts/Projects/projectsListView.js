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
    isAuthenticated
  } = props;
  const { PROJECTS } = availablecomponents;

  if (!isAuthenticated) navigate2Login();

  const deleteSelectedProject = event => deleteProject({ id: event.target.id });
  const onClick = event => navigate(`/project/${event.target.id}`);
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
      const { name, id, projectTechnos } = project;

      return (
        <tr key={id}>
          <td>
            <a id={id} className="simpleLink" onClick={onClick}>{name}</a>
          </td>
          <td><a id={id} target='blank'>{projectTechnos}</a></td>
          <td>
            <a className="simpleLink" id={id} onClick={duplicateSelectedProject}>
              Duplicate
            </a>
          </td>
          <td>
            <a className="simpleLink" id={id} onClick={deleteSelectedProject}>
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
        <a className="simpleLink" onClick={() => navigate("/project/new")}>
          Add Project
      </a>
      </div>
      <Table striped bordered hover>
        <tbody>{projectsList()}</tbody>
      </Table>
    </div>
  );
};

export default ProjectsListView;
