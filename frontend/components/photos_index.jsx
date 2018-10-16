import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class PhotosIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
     this.props.requestPhotos();
  }

  render() {
    const {photos} = this.props;
    if (photos === undefined) {
      return (<h1>Loading...</h1>);
    }
   return (
     <div className="photo-index-page">
       <div className="photo-index-container">
         <h3>Explore</h3>
         <ul className="photo-spread">
           {photos.map(photo => <li className="photo-index-item"> <Link to={`/photos/${photo.id}`}><img className="photo-list-mini" src={photo.image_url}/></Link></li>)}
         </ul>
       </div>
     </div>
   );
 }

}
//         {photos.map(photo => <li className="photo-index-item"> <img className="photo-list-mini" src={photo.image_url}/></li>)}

export default withRouter(PhotosIndex);
