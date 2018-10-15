import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';


const ProfileNav = (props) =>{
  const activePath = props.location.pathname
  //each li will have logic for ctive or not active
  return(
    <div className="home-navbar">
      <ul className="home-navbar-content">
        <li className={activePath === "/users/:userID/photos" ? "active-pane" : "inactive-pane"}>
          <Link to="/users/:userID/photos">Your Photostream</Link>
        </li>

    <li className={activePath === "/users/:userID/albums" ? "active-pane" : "inactive-pane"}>
          <Link to="/users/:userID/albums">Albums</Link>
    </li>
          <li className="pending">Trending</li>
          </ul>>
    </div>
  );
};

export default withRouter(ProfileNav);
