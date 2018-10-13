import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAlbum(this.props.match.params.albumID)
    .then(res => {
      this.props.requestUser(res.album.user_id)
    });

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

           </div>
         </div>
         <div className="album-cover" style = {{backgroundImage: `url(${photos[0].image_url})`}} >
           <h1 className="album-title">{this.props.album.title}</h1>
            <div className="album-owner">By {this.props.user.username}</div>
         </div>
         <div className="album-photos-container">
            <ul className="photo-spread">
              {photos.map(photo => <li className="photo-index-item"> <Link to={`/photos/${photo.id}`}><img className="album-thumb" src={photo.image_url}/></Link></li>)}
            </ul>
          </div>
       </div>
     );
   }
}
//            <img className="album-cover-photo" src={photos[0].image_url}></img>

export default withRouter(AlbumShow);
