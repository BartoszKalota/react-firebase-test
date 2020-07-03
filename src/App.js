import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import HomePage2 from './components/HomePage2';

import { withAuthentication } from './components/Session';
import * as ROUTES from './components/constants/routes';

const App = () => (
  <Router>
    <Navigation />
    <hr />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.HOME2} component={HomePage2} />
    </Switch>
  </Router>
);
 
export default withAuthentication(App);