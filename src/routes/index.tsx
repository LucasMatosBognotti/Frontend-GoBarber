import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/ForgotPassword';
import Reset from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/forgot-password" component={Forgot} />
      <Route path="/reset-password" component={Reset} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
