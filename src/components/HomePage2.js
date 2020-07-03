import React from 'react';
import { withAuthorization } from './Session';

const HomePage2 = ({ firebase }) => {
  console.log(firebase.auth.currentUser);
  return (
    <h1>HomePage2</h1>
  );
}

export default withAuthorization(HomePage2);