import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.editMaybe = this.editMaybe.bind(this);
    this.newMaybe = this.newMaybe.bind(this);
    this.sakujo = this.sakujo.bind(this);
  }

  componentDidMount(){
    this.props.requestAlbum(this.props.match.params.albumID)
    .then(res => {
      this.props.requestUser(res.album.user_id)
    });

  }


    sakujo(e){
      e.preventDefault();
       this.props.destroyAlbum(this.props.album.id)
      // .then(this.props.history.push("/albums"));
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
            <ul className="photo-spread">
              {photos.map(photo => <li id={photo.id}className="photo-index-item"> <h8 className="photo-data-thumb">{photo.title}</h8><Link to={`/photos/${photo.id}`}><img className="album-thumb" src={photo.image_url}/></Link></li>)}
            </ul>
          </div>
       </div>
     );
   }
}
//            <img className="album-cover-photo" src={photos[0].image_url}></img>


export default withRouter(AlbumShow);
