
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import OnlineHeaderContainer from './online_header_container';


class UserProfile extends React.Component {

  componentDidMount(){
  //  this.props.fetchUser
  }

  displayAddStuff(){

  }

  render(){
  //  const {user, photos, albums} = this.props
  return (
    <div className="user-profile">
      <OnlineHeaderContainer />
      <br></br>
      <div className="cover-photo" >
        <div className="cover-photo-content"> </div>
      </div>
      <div className="profile-subnav">
      </div>
      <div className="profile-pane">
      </div>
    </div>

  )

  }
}
//style = {{backgroundImage: `url(${photos[0].image_url})`}}
export default UserProfile;
