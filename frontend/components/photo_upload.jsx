import React from 'react';

class PhotoUpload extends React.Component {
 constructor (props){
   super(props)
   this.onFileChange = this.onFileChange.bind(this);
  this.save = this.save.bind(this);
 }

  onFileChange(e) {
    const file = e.target.files[0];
    this.setState({ image: file});
  }



  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
}

  save(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.image);
    this.props.newPhoto(formData);
  }

shadowClick(){
  const clicky = document.getElementsByClassName('upload-choose')[0];
  clicky.click();
}

  render() {
    return (
      <div className="upload-container">
        <h1 className="upload-info">Drag & Drop photo here</h1>
        <h1 className="upload-info">or</h1>
        <form className="upload-form" onSubmit={this.save}>
          <div className="upload-form-main">
            <div className="upload-button" onClick={this.shadowClick}> Choose photo to upload</div>
            <input  className="upload-choose"type="file" onChange={this.onFileChange}></input>
          </div>
          <div className="upload-form-left">
            <input placeholder="Title"type="text" onChange={this.update('title')}></input>
            <input placeholder="Description" type="text" onChange={this.update('description')}></input>
            <input className="upload-submit-active" type="submit" value="Upload Photo"></input>
          </div>
        </form>
      </div>
    );
  }

}

//controls bar above work area
export default PhotoUpload;
//util ajax



//this goes in the photo upload


//this goes in the create page
