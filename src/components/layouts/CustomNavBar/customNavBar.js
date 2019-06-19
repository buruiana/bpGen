import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import isEmpty from "lodash/isEmpty";
import Nav from "react-bootstrap/Nav";
import { navigate } from "../../../utils";

const NavBar = props => {
  const { isAuthenticated, logout, projectSettings, addModal } = props;

  const goTo = e => navigate(e.target.name);
  const initProject = () => {
    console.log("console: initProject");
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

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={goTo} name="/home">
        bpGen
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link name="/init" onClick={initProject}>
          Init Project
        </Nav.Link>
        {getTemplateForms()}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
