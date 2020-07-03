import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
 
import * as ROUTES from '../constants/routes';

const SignOutButton = ({ firebase }) => {
  const history = useHistory();
  const handleClick = () => {
    firebase.doSignOut()
      .then(() => history.push(ROUTES.LANDING))
      .catch(err => console.error(err));
  };
  return (
    <button type="button" onClick={handleClick}>
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);