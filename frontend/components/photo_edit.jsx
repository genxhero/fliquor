import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {merge} from 'lodash';

class PhotoEdit extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      loading: false,
      id: this.props.photo.id,
      title: this.props.photo.title,
      description: this.props.photo.description,
      tag_ids: this.props.photo.tags.map((el) => el.title).join(", ")
      //parse tags into a string
    };
    this.update = this.update.bind(this);
   this.save = this.save.bind(this);
   this.shadowSubmit = this.shadowSubmit.bind(this);
  }



  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
}

renderErrors() {
  if (this.props.errors.photos.length > 0) {

    return (
      <div className="errors">
        <ul>
          {this.props.errors.photos.map((error, key) => {
            return <li>{error}</li>
          })}
        </ul>
      </div>
    );
  }
}

shadowSubmit(){
  const shadow = document.getElementsByClassName('upload-submit')[0];
  shadow.click();
}

  save(e) {
    e.preventDefault();
    this.setState ({
      loading: true
    });
    let formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[tag_ids]',this.state.tag_ids);
    //;
    this.props.editPhoto(formData, this.props.photo.id)
     .then(
        this.props.history.push(`/photos/${this.props.photo.id}`));

  }

  render(){
    if (this.state.loading){

      return
      (        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

    }

    return (
      <div className="upload-container">
        <div className="upload-toolbar">
          <div className="shadow-submit-active" onClick={this.shadowSubmit}> Save Photo</div>
        </div>
        <form onSubmit={this.save} className="edit-form">
          <div className="upload-form-preview">
            <img className="preview" src={this.props.photo.image_url}/>
         </div>

                 <div className="edit-form-left">
                   <input className="photo-field-title"
                     value={this.state.title}
                     placeholder={this.state.title} type="text"
                      onChange={this.update('title')}
                      ></input>
                    <textarea
                     className="photo-field"
                     placeholder="Add a description"
                     value={this.state.description}
                     onChange={this.update('description')}></textarea>
                     <input
                       className="photo-field"
                       placeholder="Add tags separated by commas"
                       value={this.state.tag_ids}
                       type="text"

                       onChange={this.update('tag_ids')}></input>
                   <input className="upload-submit" type="submit" value=""></input>
                 </div>
                 <div>
                   {this.renderErrors()}
                 </div>
        </form>
      </div>
    );
  }

}

export default withRouter(PhotoEdit);
