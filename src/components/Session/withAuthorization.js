import React, { useEffect } from 'react';
 
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

const withAuthorization = (Component) => {
  const WithAuthorization = (props) => {
    useEffect(() => {
      const listener = props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!authUser) {
            props.history.push(ROUTES.SIGN_IN);
          }
        }
      );
      return () => listener();
    }, []);
    return (
      <AuthUserContext.Consumer>
        {authUser => !!authUser && <Component {...props} />}
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithAuthorization);
};
 
export default withAuthorization;