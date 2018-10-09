import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
 import SignupContainer from './signup_container';

const Splash = () => {
  return (
    <div className="splash">
      <h1>Find your inspiration.</h1>
        <h3>Join the Fliquor party, home to 99 bottles of photos!</h3>
        <Link className="big-signup" to="/signup">Sign Up</Link>
    </div>
  );
};

export default Splash;
