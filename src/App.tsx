import React from 'react'
import Basic01 from './components/basic01'
import Basic02 from './components/basic02'
import Basic03 from './components/basic03'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/basic01'}>Basic01</Link>
            </li>
            <li>
              <Link to={'/basic02'}>Basic02</Link>
            </li>
            <li>
              <Link to={'/basic03'}>Basic03</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path={'/basic01'}>
          <Basic01 />
        </Route>
        <Route path={'/basic02'}>
          <Basic02 />
        </Route>
        <Route path={'/basic03'}>
          <Basic03 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
