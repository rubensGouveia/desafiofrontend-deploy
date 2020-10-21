import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Pesquisa from './pages/Pesquisa';
import Login from './pages/Login';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pesquisa" component={Pesquisa} />
      </Switch>
    </HashRouter>
  );
}
