import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
 import SignupContainer from './signup_container';
 import LoginContainer from './login_container';
import {AuthRoute} from '../util/auth_util';

const Splash = (props) => {
if (props.location.pathname === '/') {
  return (
    <div className="splash">
      <h1>Find your inspiration.</h1>
      <br></br>
        <h3>Join the Fliquor party, home to 99 bottles of photos!</h3>
        <br></br>
        <br></br>

          <Link className="big-signup" to="/signup">Sign Up</Link>
    </div>
  ); } else if (props.location.pathname === '/signup') {
    return (
      <div className="splash">
          <SignupContainer />
      </div>
    );
  } else if (props.location.pathname === '/login'){
      return (
        <div className="splash">
          <LoginContainer />
        </div>
      );
  } else {
    return (<div></div>);
  }
//logic for checking route

};

export default Splash;
