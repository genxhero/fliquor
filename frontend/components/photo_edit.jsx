import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {merge} from 'lodash';

class PhotoEdit extends React.Component {
  constructor(props){
    super(props)
    debugger;
    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description,
      tag_ids: this.props.photo.tags.map((el) => el.title).join(", ")
      //parse tags into a string
    };
    this.update = this.update.bind(this);
   this.save = this.save.bind(this);
   this.stringifyTags = this.stringifyTags.bind(this);
  }

  stringifyTags(){
    const tagTitlArr = this.props.photo.tags.map((el) => el.title)
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
  //  formData.append('photo[image]', this.state.image);
    formData.append('photo[tag_ids]',this.state.tag_ids)
    this.props.newPhoto(formData).then( res => this.props.history.push(`/photos/${res.photo.id}`) );

  }

}

export default withRouter(PhotoEdit);
