import React from 'react';
import { Link } from 'react-router-dom';

import SignoutButton from './elements/SignoutButton';

import { AuthUserContext } from './Session';
import * as ROUTES from './constants/routes';
 
const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME2}>Home2</Link>
    </li>
    <li>
      <SignoutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
  </ul>
);

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => 
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
 
export default Navigation;