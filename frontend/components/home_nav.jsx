import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';


const HomeNav = (props) =>{
  const activePath = props.location.pathname
  //each li will have logic for ctive or not active
  return(
    <div className="home-navbar">
      <ul className="home-navbar-content">
        <li className={activePath === "/home" ? "active-pane" : "inactive-pane"}>
          <Link to="/home">Explore</Link>
        </li>

    <li className={activePath === "/albums" ? "active-pane" : "inactive-pane"}>
          <Link to="/albums">Albums</Link>
    </li>
          <li className={activePath === "/tags"  ? "active-pane" : "inactive-pane" }>
            <Link to="/tags">Trending</Link>
          </li>
          </ul>>
    </div>
  );
};

export default withRouter(HomeNav);
