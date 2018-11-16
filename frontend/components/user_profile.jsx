
import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';
import OnlineHeaderContainer from './online_header_container';
import { getPhotosByUser } from "../reducers/selectors.js";



const ProfileSubnav = ({props}) => {
  // debugger;
    const activePath = props.location.pathname
    return <div className="profile-subnav">
        <ul className="profile-subnav-content">
          <li className={activePath === `/users/${props.match.params.userID}/about` ? "active-pane" : "inactive-pane"}>
            <Link to={`/users/${props.match.params.userID}/about`}>
              About
            </Link>
          </li>

          <li className={activePath === `/users/${props.match.params.userID}/photostream` ? "active-pane" : "inactive-pane"}>
          <Link to={`/users/${props.match.params.userID}/photostream`}>Photostream</Link>
          </li>
        <li className={activePath === `/users/${props.match.params.userID}/albums` ? "active-pane" : "inactive-pane"}>
          <Link to={`/users/${props.match.params.userID}/albums`}>Albums</Link>
          </li>
        </ul>>
      </div>;

};

const ProfilePane = ({props, overlay, noverlay, shadowClick}) => {
  const activePath = props.location.pathname;
  const userId = parseInt(props.match.params.userID);  
  const photos = Object.values(props.photos).filter( (photo) => {
     if (photo.user_id === userId) {
       return photo
     }
    }
   );

  const albums = props.albums.filter((album) => {
    if (album.user_id === userId) {
      return album;
    }
   }
  );
 
  switch (activePath) {
    case `/users/${userId}/photostream`:
      return (
          
            <ul className="photo-spread">
              {photos.map(photo => (
                <li
                  className="photo-index-item"
                  id={`${photo.id}`}
                  onMouseEnter={overlay}
                  onMouseLeave={noverlay}
                  onClick={shadowClick}
                >
                  <div className="photo-index-info-overlay">
                    <div className="photo-index-title">{photo.title}</div>
                    <div className="photo-index-user">
                      by {photo.user.first_name + " " + photo.user.last_name}
                    </div>
                  </div>

                  <Link
                    to={`/photos/${photo.id}`}
                    className="link-from-photo-index"
                  >
                    <img
                      className="photo-list-mini"
                      src={photo.image_url}
                      id={`${photo.id}`}
                      onMouseEnter={overlay}
                      onMouseLeave={noverlay}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          
        );
      break;
    case `/users/${userId}/about`:
      return <h1>About</h1>;
      break;
    case `/users/${userId}/albums`:
      return (
              
        <ul className="album-spread">
          <li> <Link className="album-index-create" to="/albums/create">Create New Album</Link></li>
          {albums.filter(album => album.photos.length > 0).map(album => <li className="album-index-item" id={`${album.id}`} > <h6 className="album-data-thumb">{album.title} by {album.user.username}</h6><Link to={`/albums/${album.id}`}><img className="album-thumbnail" src={album.photos[0].image_url} /></Link></li>)}
        </ul>
        );
      break;
    default:
      return <Redirect to={`/users/${userId}/about`} />;
      break;
  }

};

class UserProfile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pageOwner: null
    }
    this.shadowClick = this.shadowClick.bind(this);
    this.overlay = this.overlay.bind(this);
    this.noverlay = this.noverlay.bind(this);

  }

  shadowClick(event) {
    this.props.history.push(`/photos/${event.currentTarget.id}`);
  }

  overlay(event) {
  
    this.setState({ overlaying: true });
    event.currentTarget.style.color = "white";
    event.currentTarget.style.textShadow = "1px 1px black";
    event.currentTarget.firstChild.style.backgroundImage = "linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0), rgba(255,0,0,0), rgba(0,0,0,.7))";
  }

  noverlay(event) {
    this.setState({ overlaying: false });
    event.currentTarget.style.color = "transparent";
    event.currentTarget.style.textShadow = "none";
    event.currentTarget.firstChild.style.backgroundImage = "none";
  }

  componentDidMount() {
    this.props.requestAlbums();
    this.props.requestUser(this.props.match.params.userID).then(res => {
      this.setState({ pageOwner: res.user });
      //this.props.requestAlbums 
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
  const photos = Object.values(this.props.photos).filter((photo) => {
    if (photo.user_id === user.id) {
      return photo
    }
  }
  );

  if (photos.length > 0){
   const cover =  document.getElementById("cover");
   if (cover != null) {
     cover.style.backgroundImage = `url(${photos[0].image_url})`;
     cover.style.backgroundPosition = "center";
   }
   
  }

  return (
    <div className="user-profile">
      <OnlineHeaderContainer />
      <br></br>
      <div className="cover-photo" id="cover" >
        <div className="cover-photo-content">
          <span className="user-info">{user.first_name}  {user.last_name} </span>
        </div>
        <div className="cover-photo-overlay"></div>
      </div>
      <ProfileSubnav props={this.props} />
      
      <div className="profile-pane">
      <ProfilePane  props={this.props} overlay={this.overlay} noverlay={this.noverlay} shadowClick={this.shadowClick} />
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
