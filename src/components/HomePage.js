import React from 'react';
import { withAuthorization } from './Session';

const HomePage = ({ firebase }) => {
  console.log(firebase);
  return (
    <h1>HomePage</h1>
  );
}

export default withAuthorization(HomePage);