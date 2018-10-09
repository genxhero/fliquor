import React from 'react';
 import LoginContainer from './login_container';
 import SignupContainer from './signup_container';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute} from '../util/auth_util';
import Splash from './splash';
import OfflineHeaderContainer from './offline_header_container';
//import OnlineHeaderContainer from './online_header_container';
//import SplashContainer from './splash_container';
//import PhotosIndexContainer from './photos_index';
//feed = protected, splash is auth

const App = () => (
  <div>
    <AuthRoute component={OfflineHeaderContainer} />
    <AuthRoute component={Splash} />
  </div>
);

export default App;
// <AuthRoute path="/login" component={LoginContainer} />
// <AuthRoute path="/signup" component={SignupContainer} />
// <ProtectedRoute /> use this for logout and oth
