import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import routes from "../../../app/routes";
import NavBar from "../NavBar";
import ModalsManager from "../../modals/modalsManager";
import "../../../stylesheets/main.scss";

const App = ({ history, modals }) => {
  return (
    <ConnectedRouter history={history}>
      <Row className="justify-content-md-center">
        <Col md={12}>
          <NavBar />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {routes}
        {ModalsManager(modals)}
      </Row>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
