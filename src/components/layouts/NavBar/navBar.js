import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigate } from "../../../utils";

const NavBar = props => {
  const {
    isAuthenticated,
    logout,
  } = props;

  const goTo = e => {
    navigate(e.target.name);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={goTo} name="/home">
        bpGen
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link name="/home" onClick={goTo}>
          Home
        </Nav.Link>
        {isAuthenticated && (
          <>
            <Nav.Link name="/files" onClick={goTo}>
              Files
            </Nav.Link>
          </>
        )}
      </Nav>
      <Nav>
        {!isAuthenticated && (
          <Nav.Link
            name="/login"
            onClick={goTo}
            className="justify-content-end"
          >
            Login
          </Nav.Link>
        )}

        {isAuthenticated && (
          <Nav.Link
            name="/logout"
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
