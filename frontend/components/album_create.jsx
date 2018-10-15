import React from 'react';
import { Link, withRouter} from 'react-router-dom';

//using currentUser
class AlbumCreate extends React.Component {
   constructor(props){
     super(props);
   }

   save(e) {
     e.preventDefault();
     let formData = new FormData();
     formData.append('album[title]', this.state.title);
     formData.append('album[description]', this.state.description);
     //formData.append('albim[photo_ids]')
     this.props.newAlbum(formData).then( res => this.props.history.push(`/albums/${res.album.id}`) );
   }

   toggleSelected(event){

   }

  render() {
    return (
      <div className="album-creation-page">

        <div className="album-creation-content">
          <form className="album-creation-data-form">
            <input className="album-creation-field-title"
              placeholder="new album"
              type="text"
              >

            </input>
            <textarea className="album-creation-field-description">
            </textarea>
              <input type="submit"
                value="save"
                className="album-save-enabled"></input>
          </form>

          <div className="album-creation-photos">
            <ul className="current-user-photos">
              {this.props.photos.map(
                photo => <li className="album-creation-thumbnail">
                 <img className="album-creation-pic" src={photo.image_url}/>
               </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
  export default withRouter(AlbumCreate);
