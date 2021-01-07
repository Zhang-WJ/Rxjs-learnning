import React from 'react';
import Basic01 from "./components/basic01";
import Basic02 from "./components/basic02";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li><Link to={"/basic01"}>Basic01</Link></li>
                      <li><Link to={"/basic02"}>Basic02</Link></li>
                  </ul>
              </nav>
          </div>
          <Switch>
              <Route path={"/basic01"}>
                  <Basic01 />
              </Route>
              <Route path={"/basic02"}>
                  <Basic02 />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
