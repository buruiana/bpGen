import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/layouts/Home";

import LoginForm from "../components/forms/LoginForm";
import Templates from "../components/layouts/Templates";
import TemplatesForm from "../components/forms/TemplatesForm";
import Providers from "../components/layouts/Providers";
import ProviderForm from "../components/forms/Providers";
import Technos from "../components/layouts/Technos";
import TechnosForm from "../components/forms/Technos";
import Components from "../components/layouts/Components";
import ComponentsForm from "../components/forms/ComponentsForm";
import PropTypes from "../components/layouts/PropTypes";
import PropTypesForm from "../components/forms/PropTypesForm";
import Editor from "../components/layouts/Editor";

import NoMatch from "../components/layouts/NoMatch";

const routes = (
  <div className="container-fluid">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/editor" component={Editor} />
      <Route path="/templates" component={Templates} />
      <Route path="/template/:id" component={TemplatesForm} />
      <Route path="/providers" component={Providers} />
      <Route path="/provider/:id" component={ProviderForm} />
      <Route path="/technos" component={Technos} />
      <Route path="/techno/:id" component={TechnosForm} />
      <Route path="/components" component={Components} />
      <Route path="/component/:id" component={ComponentsForm} />
      <Route path="/proptypes" component={PropTypes} />
      <Route path="/proptype/:id" component={PropTypesForm} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
