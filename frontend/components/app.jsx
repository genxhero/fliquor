import React from 'react';
 import LoginContainer from './login_container';
 import SignupContainer from './signup_container';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/auth_util';
import Splash from './splash';
import OfflineHeaderContainer from './offline_header_container';
import OnlineHeaderContainer from './online_header_container';
import UserProfileContainer from './user_profile_container';
//import SplashContainer from './splash_container';
//import PhotosIndexContainer from './photos_index';
// splash is auth

const App = () => (
  <div>

    <AuthRoute exact path="/" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/signup" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/login" component={OfflineHeaderContainer} />
    <AuthRoute path="/" component={Splash} />
    <Route  path="/home" component={OnlineHeaderContainer} />
    <Route exact path="/users/:userID" component={UserProfileContainer} />
    <ProtectedRoute path="/photos/create" />
  </div>
);

export default App;
// <AuthRoute path="/login" component={LoginContainer} />
// <AuthRoute path="/signup" component={SignupContainer} />
// <ProtectedRoute /> use this for logout and oth
