import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      overlaying: false
    };
    this.editMaybe = this.editMaybe.bind(this);
    this.newMaybe = this.newMaybe.bind(this);
    this.sakujo = this.sakujo.bind(this);
    this.overlay = this.overlay.bind(this);
    this.noverlay = this.noverlay.bind(this);
  }

  componentDidMount(){
    this.props.requestAlbum(this.props.match.params.albumID)
    .then(res => {
      this.props.requestUser(res.album.user_id)
    });

  }


  overlay(event){
    // let butter = "butter";

    // let pika = "fluff";
    this.setState({overlaying: true});

    event.currentTarget.style.color = "white";
    event.currentTarget.style.textShadow="1px 1px black";
    //event.currentTarget.firstChild.lastChild.style.color = "gray";
    event.currentTarget.firstChild.style.backgroundImage="linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0), rgba(255,0,0,0), rgba(0,0,0,.7))";



  }

  noverlay(event){
 this.setState({overlaying: false});
     event.currentTarget.style.color = "transparent";
     // ;
     event.currentTarget.style.textShadow="none";
    //event.currentTarget.firstChild.lastChild.style.color = "transparent";
     event.currentTarget.firstChild.style.backgroundImage="none";
  }

    sakujo(e){
      e.preventDefault();
       this.props.destroyAlbum(this.props.album.id)
       .then(this.props.history.push("/albums"));
    }

  editMaybe(){
    if (this.props.currentUser.id === this.props.album.user.id){
        return (
            <div className="button-span">
              <Link
              to={`/albums/${this.props.album.id}/edit`}
              className="album-tb-edit"
              ></Link>
              <div className="photo-destroy-btn"
                onClick={this.sakujo}>
              </div>
            </div>

      );
    } else {
      return (<span></span>);
    }
  }

  newMaybe(){
    if (this.props.currentUser.id === this.props.album.user.id){
        return (<Link
        to="/albums/create"
          className="album-tb-new"
          >New</Link>
      );
    } else {
      return (<span></span>);
    }
  }


   render(){
     if (this.props.album === undefined || this.props.user === undefined) {
       return 'Loading';
     }
     const photos = this.props.album.photos;

      if (photos === undefined) {
        return "Loading";
      }



     return (
       <div className="album-page">
         <div className="album-toolbar">
           <div className="album-toolbar-content">
             <div className="album-toolbar-buttons">
               {this.newMaybe()}
             </div>

           </div>

         </div>

         <div className="album-cover" style = {{backgroundImage: `url(${photos[0].image_url})`}} >
           <div className="dark-bg-overlay"> </div>
              <div className="button-span">{this.editMaybe()}</div>
              <div className="album-information">
                <h1 className="album-title">{this.props.album.title}</h1>
                  <h1 className="album-description">{this.props.album.description}</h1>
                 <div className="album-owner">By { this.props.currentUser.id === this.props.album.user.id ? "YOU"  : this.props.album.user.username }</div>
              </div>
         </div>
         <div className="album-photos-container">
            <ul className="album-photo-spread">
              {photos.map(photo =>
              <li id={photo.id}
                  className="album-show-photo"
                  onMouseEnter={this.overlay}
                  onMouseLeave={this.noverlay}
                   >
                <div className="photo-data-thumb-holder">
                    <div className="photo-data-thumb">{photo.title}</div>
                </div>
                <Link  to={`/photos/${photo.id}`}>
                  <img className="album-thumb" src={photo.image_url}/>
                </Link>
              </li>)}
            </ul>
          </div>
       </div>
     );
   }
}
//            <img className="album-cover-photo" src={photos[0].image_url}></img>


export default withRouter(AlbumShow);
