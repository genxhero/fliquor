import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class TagShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

    this.props.requestTag(this.props.match.params.tagTitle)

  }

  render(){

    if (this.props.tag === undefined) {
      return 'Loading';
    }
     const photos = this.props.tag.photos;
     if (photos === undefined) {
       return "Loading";
     }

    return (
      <div className="tag-show-page">
        <div className="tag-show-container">
          <div className="tag-show-links"><Link to="/tags">Tags</Link><div className="arrow"></div><div>{this.props.tag.title}</div></div>
          <div className="tag-show-label"> All Photos Tagged {this.props.tag.title}</div>
          <ul className="tag-photo-spread">
            {photos.map(photo => <li className="tag-photo" id={`${photo.id}`}> <Link to={`/photos/${photo.id}`}><img className="photo-list-mini" src={photo.image_url}/></Link></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(TagShow);
