
import React from 'react';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute} from '../util/auth_util';

const OfflineHeader = ({store}) => (
 <div className="header-offline">
   <div className="header-background"></div>
   <Link to="/home" className="home-link">fliquor</Link>
   <form className="offline-search">
     <input className="search-bar" type="text" ></input>
   </form>
   <nav className="linkbox">
     <Link to="/login"className="login-link">Log In</Link>
     <Link to="/signup" className="signup-link-splash">Sign Up</Link>
   </nav>
</div>
);

export default OfflineHeader;
