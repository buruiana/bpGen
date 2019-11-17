import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/layouts/Home";

import LoginForm from "../components/forms/LoginForm";
import Templates from "../components/layouts/Templates";
import TemplatesMainForm from "../components/forms/templatesForm";
import Projects from "../components/layouts/Projects";
import Providers from "../components/layouts/Providers";
import ProviderForm from "../components/forms/Providers";
import Technos from "../components/layouts/Technos";
import TechnosForm from "../components/forms/Technos";
import Components from "../components/layouts/Components";
import ComponentsMainForm from "../components/forms/ComponentsForm";
import PropTypes from "../components/layouts/PropTypes";
import PropTypesForm from "../components/forms/PropTypesForm";
import Editor from "../components/layouts/Editor";
import NoMatch from "../components/layouts/NoMatch";
import ConfigsForm from "../components/forms/ConfigsForm";
import Users from "../components/layouts/Users";
import UsersForm from "../components/forms/UsersForm";

const routes = (
  <div className="container-fluid">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/editor" component={Editor} />
      <Route path="/templates" component={Templates} />
      <Route path="/template/:id" component={TemplatesMainForm} />
      <Route path="/projects" component={Projects} />
      <Route path="/providers" component={Providers} />
      <Route path="/provider/:id" component={ProviderForm} />
      <Route path="/technos" component={Technos} />
      <Route path="/techno/:id" component={TechnosForm} />
      <Route path="/components" component={Components} />
      <Route path="/component/:id" component={ComponentsMainForm} />
      <Route path="/proptypes" component={PropTypes} />
      <Route path="/proptype/:id" component={PropTypesForm} />
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={UsersForm} />
      <Route path="/configs" component={ConfigsForm} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
