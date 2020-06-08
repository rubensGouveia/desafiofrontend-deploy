import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </HashRouter>
  );
}
