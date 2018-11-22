import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
 import SignupContainer from './signup_container';
 import LoginContainer from './login_container';
import {AuthRoute} from '../util/auth_util';


const Footer = () => (
  <div className="footer"> 
  <nav className="dead-links">
      <Link to="/">About</Link>
      <Link to="/">Jobs</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Developers</Link>
      <Link to="/">Guidelines</Link>
      <Link to="/">Privacy</Link>
      <Link to="/">Terms</Link>
      <Link to="/">Help Forum</Link>
  </nav>
  </div>
);

const Splash = (props) => {
  console.log("Current Path: ", props.location.pathname);
if (props.location.pathname === '/') {
  return (
    <div className="splash">
      <h1 className="inspire">Find your inspiration.</h1>
      <br></br>
        <h3 className="tagline">Join the Fliquor party, home to 99 bottles of photos!</h3>
        <br></br>
        <br></br>

          <Link className="big-signup" to="/signup">Sign Up</Link>
      <br></br>
      <br></br>
      <Link className="big-signup" to="/home">View Photos</Link>
      <Footer />

    </div>
  ); } else if (props.location.pathname === '/signup') {
    return (
      <div className="splash">
          <SignupContainer />
          <Footer />
      </div>
    );
  } else if (props.location.pathname === '/login'){
      return <div className="splash">
          <LoginContainer />
           <Footer />
        </div>;
  } else {
    return (<div></div>);
  }
//logic for checking route

};

export default Splash;
