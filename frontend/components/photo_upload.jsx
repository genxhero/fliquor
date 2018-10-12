import React from 'react';

class PhotoUpload extends React.Component {
 constructor (props){
   super(props)

   this.state = {
     title: 'Untitled',
     description:'Nondescript',
     photoURL: null
   };
   this.onFileChange = this.onFileChange.bind(this);
  this.save = this.save.bind(this);
 }

  onFileChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, photoURL: fileReader.result});
    }

    fileReader.readAsDataURL(file);
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

shadowSubmit(){
  const shadow = document.getElementsByClassName('uplad-submit')
}

  render() {
 const UploadToolbar = () => {
   if (this.state.photoURL) {
     return (
       <div className="upload-toolbar">
         <div className="shadow-submit-active" onClick={this.shadowSubmit}> Upload Photo</div>
       </div>
     );
   } else {
     return (
       <div className="upload-toolbar">
    <div className="shadow-submit-inactive">Upload</div>
       </div>
     );
   }
 };

   const MainContent = () => {
     if (this.state.photoURL){
       return (
         <div className="upload-form-main">
           <img className="preview" src={this.state.photoURL}/>
        </div>
       );
     } else {
      return (
         <div className="upload-form-main">
           <h1 className="upload-info">Drag & Drop photo here</h1>
           <h1 className="upload-info">or</h1>
           <div className="upload-button" onClick={this.shadowClick}> Choose photo to upload</div>
           <input  className="upload-choose"type="file" onChange={this.onFileChange}></input>
         </div>
       );
     }
   };

   const LeftContent = () => {
     if (this.state.photoURL){
       return (
         <div className="upload-form-left">
           <input placeholder="Title"type="text" onChange={this.update('title')}></input>
           <input className="photo-field-title" placeholder="Add a description" type="text" onChange={this.update('description')}></input>
           <input className="upload-submit" type="submit" value=""></input>
         </div>
       );
     } else {
      return (
        <div>
        </div>
       );
     }
   };



    return (


      <div className="upload-container">
          <UploadToolbar/>
        <form className="upload-form" onSubmit={this.save}>
               <MainContent />
               <LeftContent />
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
