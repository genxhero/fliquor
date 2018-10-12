import React from 'react'
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/auth_util';

class UploadHeader extends React.Component {
  render(){
     const {store, currentUser, logout} =  this.props;
      //Looks for keys of the same name
      return (
        <div className="upload-header">

          <div className="upload-left-header">
            <Link to="/" className="upload-home-link">fliquor</Link>
            <div className="nav-menu">
              <Link to={`/users/${this.props.currentUser.id}`} className="upload-nav-link">Your Photostream</Link>
            </div>
          </div>

          <div className="upload-right-header">
            <nav className="linkbox">
              <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </nav>
          </div>
       </div>
     );
  }

//              <Link to="/home" className="upload-nav-link">Explore</Link>




}

export default UploadHeader
