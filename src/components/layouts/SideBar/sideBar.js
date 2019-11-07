import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { history } from '../../../redux/store';

const SideBar = props => {
  const { initAppDone, initApp } = props;
  if (!initAppDone) {
    initApp();
  }

  return (
    <SideNav
      onSelect={(selected) => {
        const to = '/' + selected;
        if (location.pathname !== to) {
          history.push(to);
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Home
         </NavText>
        </NavItem>
        <NavItem eventKey="projects">
          <NavIcon>
            <i className="fab fa-cuttlefish" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Projects
          </NavText>
        </NavItem>
        <NavItem eventKey="editor">
          <NavIcon>
            <i className="fas fa-edit" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Editor
          </NavText>
        </NavItem>
        <NavItem eventKey="components">
          <NavIcon>
            <i className="fab fa-cuttlefish" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Components
          </NavText>
        </NavItem>
        <NavItem eventKey="propTypes">
          <NavIcon>
            <i className="fas fa-table" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Prop Types
          </NavText>
        </NavItem>
        <NavItem eventKey="providers">
          <NavIcon>
            <i className="fas fa-book-reader" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Providers
          </NavText>
        </NavItem>
        <NavItem eventKey="technos">
          <NavIcon>
            <i className="fas fa-building" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Technos
          </NavText>
        </NavItem>
        <NavItem eventKey="templates">
          <NavIcon>
            <i className="fas fa-stream" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Templates
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideBar;
