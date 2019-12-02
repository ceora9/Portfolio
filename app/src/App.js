import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import Navbar from './Navbar';
// import Landing from './Landing';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          {/* <Route exact path='/' component={Landing} /> */}
          <Route component={Routes} />
        </Switch>

      </Fragment>
    </Router>
  );
}

export default App;
