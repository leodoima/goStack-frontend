import React from 'react';
/**
 * Switch: garante que apenas uma rota seja mostrada por momento;
 * Route: são as próprias rotas;
 */
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/dashnoard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
