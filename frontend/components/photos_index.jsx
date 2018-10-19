import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class PhotosIndex extends React.Component {

  constructor(props){
    super(props);

    this.noverlay = this.noverlay.bind(this);
    this.overlay = this.overlay.bind(this);
  }

  componentDidMount(){
     this.props.requestPhotos();
  }


  overlay(event){
    // let butter = "butter";

    // let pika = "fluff";

    event.currentTarget.style.color = "white";
    event.currentTarget.style.textShadow="1px 1px black";
  //  debugger;
    event.currentTarget.style.backgroundImage="linear-gradient:(rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0), rgba(0,0,0,.7))";



  }

  noverlay(event){

     event.currentTarget.style.color = "transparent";
     // debugger;
     event.currentTarget.style.textShadow="none";
     event.currentTarget.style.backgroundImage="none";
  }

  render() {
    const {photos} = this.props;
    if (photos === undefined) {
      return (<h1>Loading...</h1>);
    }
   return (
     <div className="photo-index-page">
       <div className="photo-index-container">
         <div id="explore">Explore</div>
         <ul className="photo-spread">
           {photos.map(photo => <li
             className="photo-index-item"
              id={`${photo.id}`}
              onMouseEnter={this.overlay}
             onMouseLeave={this.noverlay}
                                    >
            <div className="photo-index-info-overlay">
              <div className= "photo-index-title">{photo.title}</div>
                <div className= "photo-index-user">by {photo.user.first_name + " " + photo.user.last_name}</div>
                        </div>

           <Link to={`/photos/${photo.id}`} className="link-from-photo-index" >
             <img className="photo-list-mini"
               src={photo.image_url}
               id={`${photo.id}`}
               onMouseEnter={this.overlay}
               onMouseLeave={this.noverlay}/>
           </Link>

         </li>)}
         </ul>
       </div>
     </div>
   );
 }

}
//         {photos.map(photo => <li className="photo-index-item"> <img className="photo-list-mini" src={photo.image_url}/></li>)}

export default withRouter(PhotosIndex);
