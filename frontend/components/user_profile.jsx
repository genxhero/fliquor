
import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import OnlineHeaderContainer from './online_header_container';
import { getPhotosByUser } from "../reducers/selectors.js";



const ProfileSubnav = ({props}) => {
  // debugger;
    const activePath = props.location.pathname
    return <div className="home-navbar">
        <ul className="home-navbar-content">
          <li className={activePath === "/users/:userID/about" ? "active-pane" : "inactive-pane"}>
            <Link to="/users/:userID/about">About</Link>
          </li>

        <li className={activePath === "/users/:userID/photostream" ? "active-pane" : "inactive-pane"}>
          <Link to="/users/:userID/photostream">Photostream</Link>
          </li>
        <li className={activePath === "/users/:userID/albums" ? "active-pane" : "inactive-pane"}>
          <Link to="/users/:userID/albums">Albums</Link>
          </li>
        </ul>>
      </div>;

};

class UserProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pageOwner: null
    }
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userID).then(res => {
      this.setState({ pageOwner: res.user });
      // debugger;
    })
  }




  componentDidUpdate(previous) {

    if (previous.match.params.userID !== this.props.match.params.userID) {

      this.props.requestUser(this.props.match.params.userID);
    }
  }

 

  render(){
  //  const {user, photos, albums} = this.props
// debugger;
if(!this.state.pageOwner) {
  return null;
} else {

  const user = this.state.pageOwner;
  return (
    <div className="user-profile">
      <OnlineHeaderContainer />
      <br></br>
      <div className="cover-photo" >
        <div className="cover-photo-content">
          <span className="user-info">{user.first_name}  {user.last_name} </span>
        </div>
        <div className="cover-photo-overlay"></div>
      </div>
      <div className="profile-subnav">
      <ProfileSubnav props={this.props} />
      </div>
      <div className="profile-pane">

      </div>
    </div>

  )

}



  }

  newMethod() {
    return this;
  }
}
//style = {{backgroundImage: `url(${photos[0].image_url})`}}
export default UserProfile;
