import React from "react";
import { Route, Switch } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "../components/layouts/Home";

import LoginForm from "../components/forms/LoginForm";
import TemplatesForm from "../components/forms/TemplatesForm";
import Providers from "../components/layouts/Providers";
import ProviderForm from "../components/forms/Providers";

import NoMatch from "../components/layouts/NoMatch";

const routes = (
  <Container>
    <Row>
      <div className="body-div">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/templates" component={TemplatesForm} />
          <Route path="/providers" component={Providers} />
          <Route path="/provider/:id" component={ProviderForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Row>
  </Container>
);

export default routes;
