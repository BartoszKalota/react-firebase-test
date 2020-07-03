import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignInPage = ({ firebase }) => {
  const [values, setValues] = useState({ ...INITIAL_STATE });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setValues({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setValues(prevState => ({
          ...prevState.values,
          error
        }));
      });
  };
  const handleChange = ({target: {name, value}}) => {
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button
        disabled={values.password === '' || values.email === ''}
        type="submit"
      >
        Sign In
      </button>

      {values.error && <p>{values.error.message}</p>}
    </form>
  );
};

export default withFirebase(SignInPage);