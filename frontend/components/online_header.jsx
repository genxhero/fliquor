
import React from 'react';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/auth_util';

class Header extends React.Component {

   render(){
      const {store, currentUser, logout} =  this.props;
       //Looks for keys of the same name
       return (
         <div className="header-online">

           <div className="left-header">
             <Link to="/" className="home-link">fliquor</Link>
             <div className="nav-menu">
               <Link to="/home" className="nav-link">Explore</Link>
                {this.youlinkmaybe()}
             </div>
           </div>

           <div className="right-header">
             <form className="online-search">
                 <input className="search-bar-main" type="text" placeholder="Photos" ></input>
             </form>
             <Link to="/photos/create" className="upload-link"></Link>
              {this.displayButtons()}
           </div>



        </div>
       )
   }

   youlinkmaybe(){
     if (this.props.currentUser){
       return (
          <Link to={`/users/${this.props.currentUser.id}`} className="nav-link">You</Link>
       );
     }
   }

   displayButtons(){
     if (this.props.currentUser) {
      return (
        <nav className="linkbox">
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </nav>
      );
     }  else {
         return(
           <nav className="linkbox">
             <Link to="/login"className="login-link">Log In</Link>
             <Link to="/signup" className="signup-link-home">Sign Up</Link>
           </nav>
         );
     }
   }


}

export default Header;
