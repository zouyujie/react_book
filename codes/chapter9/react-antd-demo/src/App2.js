import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './views/Home';
import My from './views/My';
import Settings from './views/Settings';
import NotFound from './views/NotFound';
import RenderDemo from './views/RenderDemo';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route
            exact={true}
            strict={true}
            path="/my/settings"
            component={Settings}
          ></Route>
          <Route
            path="/my/:name?"
            component={My}
            exact={true}
            strict={true}
          ></Route>
          <Route path="/render" render={() => <div>春雨弯刀</div>}></Route>
          <Redirect from="/me" to="/my" />
          <Route
            path="/render-demo"
            render={(props) => (
              <RenderDemo {...props} name="谢晓峰"></RenderDemo>
            )}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
