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
         <div className="album-photos-container">
          <h1>We are in an album</h1>
            <ul className="photo-spread">
              {photos.map(photo => <li className="photo-index-item"> <Link to={`/photos/${photo.id}`}><img className="photo-list-mini" src={photo.image_url}/></Link></li>)}
            </ul>
          </div>
       </div>
     );
   }
}

export default withRouter(AlbumShow);
