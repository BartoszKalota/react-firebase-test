import React, { useEffect } from 'react';
import { withAuthorization } from './Session';

const HomePage = ({ firebase }) => {
  useEffect(() => {
    firebase.db
      .collection('testData')
      .doc('firstData')
      .get()
      .then(doc => console.log(doc.data()))
      .catch(err => console.log(err));
  }, []);
  return (
    <h1>HomePage</h1>
  );
}

export default withAuthorization(HomePage);