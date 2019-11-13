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
import Alert from '../Alert';

const App = ({ history, modals, projectSettings, isAuthenticated, currentTemplate }) => {
  const getStyle = () => {
    return isAuthenticated
      ? 'mainBox'
      : 'mainBoxNotLogged';
  };
  return (
    <ConnectedRouter history={history}>
      <Row className="justify-content-md-center">
        {isAuthenticated &&
          <div>
            <SideBar />
          </div>
        }
        <div className={getStyle()}>
          <NavBar />
          <div className='inner-container'>
            <Alert />
            {routes}
          </div>
          {ModalsManager(modals, projectSettings, currentTemplate)}
        </div>
      </Row>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
