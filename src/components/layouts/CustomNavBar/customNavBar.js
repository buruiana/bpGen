import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import isEmpty from "lodash/isEmpty";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCogs,
  faEraser
} from '@fortawesome/free-solid-svg-icons';
import { allmodals } from "../../../utils/constants";

const NavBar = props => {
  const { projectSettings, addModal, initProject } = props;

  const initProject = () => {
    initProject();
  };

  const openModalForm = event => addModal(event.target.name);
  const getTemplateForms = () => {
    return !isEmpty(projectSettings)
      ? projectSettings.template.templateFiles.map(file => {
          return file.fileForms.map(form => {
            return (
              form.formIsActive && (
                <Nav.Link
                  name={form.formName}
                  onClick={openModalForm}
                  key={form.formName}
                >
                  {form.formName}
                </Nav.Link>
              )
            );
          });
        })
      : null;
  };

  const getInitProject = () => {
    return !isEmpty(projectSettings) && (
      <Nav.Link name="init" onClick={initProject} className="justify-content-end">
        <FontAwesomeIcon icon={faEraser} /> Init Project
      </Nav.Link>
    );
  };

  return (
    <div className="customNavBar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link
            name={allmodals.PROJECT_SETTINGS}
            onClick={openModalForm}
            id={allmodals.PROJECT_SETTINGS}
          >
            <FontAwesomeIcon icon={faCogs} /> Project Settings
          </Nav.Link>
          {getInitProject()}
          {getTemplateForms()}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
