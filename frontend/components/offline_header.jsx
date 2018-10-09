
import React from 'react';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute} from '../util/auth_util';

const Header = ({store}) => (
 <div className="header-offline">
   <Link to="/" className="home-link">fliquor</Link>
   <form className="offline-search">
     <input className="search-bar" type="text" ></input>
   </form>
   <nav className="linkbox">
     <Link to="/api/login"className="login-link">Log In</Link>
     <Link to="/api/signup" className="signup-link">Sign Up</Link>
   </nav>
</div>
);

export default Header;
