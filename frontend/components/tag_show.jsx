import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class TagShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      overlaying: false
    }
    this.overlay = this.overlay.bind(this);
    this.noverlay = this.noverlay.bind(this);
  }

  componentDidMount(){

    this.props.requestTag(this.props.match.params.tagTitle)

  }

  overlay(event){
    // let butter = "butter";

    // let pika = "fluff";
    this.setState({overlaying: true});

    event.currentTarget.style.color = "white";
    event.currentTarget.style.textShadow="1px 1px black";
    //event.currentTarget.firstChild.lastChild.style.color = "gray";
    event.currentTarget.firstChild.style.backgroundImage="linear-gradient(rgba(255,0,0,0), rgba(255,0,0,0), rgba(255,0,0,0), rgba(0,0,0,.7))";



  }

  noverlay(event){
 this.setState({overlaying: false});
     event.currentTarget.style.color = "transparent";
     // ;
     event.currentTarget.style.textShadow="none";
    //event.currentTarget.firstChild.lastChild.style.color = "transparent";
     event.currentTarget.firstChild.style.backgroundImage="none";
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
            {photos.map(photo =>
              <li className="tag-photo"
                id={`${photo.id}`}
                onMouseEnter={this.overlay}
                onMouseLeave={this.noverlay}
                >
                <div className="photo-data-thumb-holder">
                    <div className="photo-data-thumb">{photo.title}</div>
                </div>
                <Link  className="from-tag-to-photo" to={`/photos/${photo.id}`}>
                <img className="tag-photo-list-mini" src={photo.image_url}/>
              </Link>
            </li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(TagShow);
