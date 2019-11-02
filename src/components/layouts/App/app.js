import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Row from "react-bootstrap/Row";
import routes from "../../../app/routes";
import NavBar from "../NavBar";
import ModalsManager from "../../modals/modalsManager";
import "../../../stylesheets/main.scss";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideBar from '../SideBar';

const App = ({ history, modals, projectSettings, isAuthenticated }) => {
  return (
    <ConnectedRouter history={history}>
      <Row className="justify-content-md-center">
        {isAuthenticated &&
          <div>
            <SideBar />
          </div>
        }
        <div className='mainBox'>
          <NavBar />
          {routes}
          {ModalsManager(modals, projectSettings)}
        </div>
      </Row>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
