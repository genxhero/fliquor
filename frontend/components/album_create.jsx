import React from 'react';
import { Link, withRouter} from 'react-router-dom';

//using currentUser
class AlbumCreate extends React.Component {
   constructor(props){
     super(props);
     this.selected = []
     this.state = {
       loading: false,
       title: 'Untitled Album',
       description:'Nondescript Album',
       selected: []
     };
       this.save = this.save.bind(this);
       this.toggleSelected = this.toggleSelected.bind(this);
       this.update = this.update.bind(this);
   }

   update(field) {
   return event => this.setState({
     [field]: event.currentTarget.value
   });
 }

   save(e) {
     e.preventDefault();
     this.setState ({
       loading: true
     });
     let formData = new FormData();
     formData.append('album[title]', this.state.title);
     formData.append('album[description]', this.state.description);
     formData.append('album[photo_ids]', this.state.selected)
     this.props.newAlbum(formData).then( res => this.props.history.push(`/albums/${res.album.id}`) );
   }

   componentDidMount(){

   }

   toggleSelected(event){
     event.preventDefault();
     let id = parseInt(event.currentTarget.id);
     if (this.selected.includes(id) ){
        this.selected.splice(this.selected.indexOf(id), 1 );
      }  else {
        this.selected.push(id);
      }
     this.setState({
        selected: this.selected
      });
   }

  render() {
    if (this.state.loading){

      return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
    }
    return (
      <div className="album-creation-page">

        <div className="album-creation-content">
          <form className="album-creation-data-form"
              onSubmit={this.save}
            >
            <input className="album-creation-field-title"
              placeholder="new album"
              type="text"
              onChange={this.update('title')}
              >

            </input>
            <textarea className="album-creation-field-description"
                         onChange={this.update('description')}
              >
            </textarea>
              <input type="submit"
                value="save"
                className={this.state.selected.length === 0 ? "album-save-disabled" : "album-save-enabled"}>
              </input>
          </form>

          <div className="album-creation-photos">
            <ul className="current-user-photos">
              {this.props.photos.map(
                photo => <li id={photo.id} className={this.selected.includes(photo.id) ? "album-creation-thumbnail-selected": "album-creation-thumbnail"}
                onClick={this.toggleSelected}
                >
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
