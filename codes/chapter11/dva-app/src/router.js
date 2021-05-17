import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import UserPage from "./routes/user/UserPage";
import UserListPage from "./routes/user/UserListPage";
import NavPage from "./routes/NavPage";
import RequestPage from "./routes/RequestPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/user-list" exact component={UserListPage} />
        <Route path="/nav" exact component={NavPage} />
        <Route path="/request" exact component={RequestPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
