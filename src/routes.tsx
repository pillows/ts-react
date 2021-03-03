import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Page1 from "./containers/page1";
import Page2 from "./containers/page2";
import NotFound from "./containers/notFound";
import Home from "./containers/dashboard";
import Layout from "./components/layout";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <Route path="/dashboard" exact  component={Home} />
              <Route path="/page1" exact component={Page1} />
              <Route path="/page2" exact component={Page2} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
