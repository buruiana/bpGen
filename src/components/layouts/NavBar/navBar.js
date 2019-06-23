import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import isEmpty from "lodash/isEmpty";
import Nav from "react-bootstrap/Nav";
import { navigate } from "../../../utils";
import { allmodals } from "../../../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCogs,
  faEraser
} from '@fortawesome/free-solid-svg-icons';

const NavBar = props => {
  const {
    isAuthenticated,
    logout,
    providers,
    getAllProviders,
    technos,
    getAllTechnos,
    propTypes,
    getAllPropTypes,
    templates,
    getAllTemplates,
    components,
    getAllComponents,
    addModal,
    projectSettings
  } = props;

  // remove this shit
  if (isEmpty(providers)) {
    getAllProviders();
  }
  if (isEmpty(technos)) {
    getAllTechnos();
  }
  if (isEmpty(propTypes)) {
    getAllPropTypes();
  }
  if (isEmpty(templates)) {
    getAllTemplates();
  }
  // if (isEmpty(components)) {
  //   getAllComponents();
  // }

  const initProject = () => {
    console.log("console: initProject");
  };

  const goTo = e => navigate(e.target.name);
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
    // <Navbar bg="dark" variant="dark" expand="lg">
    //   <Navbar.Brand onClick={goTo} name="/home">
    //     bpGen
    //   </Navbar.Brand>
    //   <Nav className="mr-auto">
    //     <Nav.Link name="/home" onClick={goTo}>
    //       Home
    //     </Nav.Link>
    //     {isAuthenticated && (
    //       <>
    //         <Nav.Link name="/templates" onClick={goTo}>
    //           Templates
    //         </Nav.Link>
    //         <Nav.Link name="/providers" onClick={goTo}>
    //           Providers
    //         </Nav.Link>
    //         <Nav.Link name="/technos" onClick={goTo}>
    //           Technos
    //         </Nav.Link>
    //         <Nav.Link name="/components" onClick={goTo}>
    //           Components
    //         </Nav.Link>
    //         <Nav.Link name="/proptypes" onClick={goTo}>
    //           PropTypes
    //         </Nav.Link>
    //         <Nav.Link name="/editor" onClick={goTo}>
    //           Editor
    //         </Nav.Link>
    //       </>
    //     )}
    //   </Nav>
    //   <Nav>
    //     {!isAuthenticated && (
    //       <Nav.Link
    //         name="login"
    //         onClick={goTo}
    //         className="justify-content-end"
    //       >
    //         Login
    //       </Nav.Link>
    //     )}

    //     {isAuthenticated && (
    //       <Nav.Link
    //         name="logout"
    //         onClick={logout}
    //         className="justify-content-end"
    //       >
    //         Logout
    //       </Nav.Link>
    //     )}
    //   </Nav>
    // </Navbar>
    <Navbar expand="lg">
      <Navbar.Brand onClick={goTo} name="/home">
        bpGen
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link name="/home" onClick={goTo}>
          Home
        </Nav.Link>
        {isAuthenticated && (
          <>
            <Nav.Link
              name={allmodals.PROJECT_SETTINGS}
              onClick={openModalForm}
              id={allmodals.PROJECT_SETTINGS}
            >
              <FontAwesomeIcon icon={faCogs} /> Project Settings
              </Nav.Link>
            {getTemplateForms()}
            <Nav.Link name="init" onClick={initProject}>
              <FontAwesomeIcon icon={faEraser} /> Init Project
              </Nav.Link>
          </>
        )}
      </Nav>
      <Nav>
        {!isAuthenticated && (
          <Nav.Link
            name="login"
            onClick={goTo}
            className="justify-content-end"
          >
            Login
          </Nav.Link>
        )}

        {isAuthenticated && (
          <Nav.Link
            name="logout"
            onClick={logout}
            className="justify-content-end"
          >
            Logout
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
