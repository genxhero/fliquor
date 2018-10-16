import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class TagIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount()
    {

    this.props.requestTags();

  }

  render(){
    const {tags} = this.props;

    if (tags === undefined) {
      return "Loading";
    }


    return (
      <div className="tag-index-page">
        <div className="tag-index-container">
          <h4 id="tagslabel">Trending Tags — All Time</h4>
          <ul className="tag-spread">
            {tags.filter(tag => tag.photos.length > 0).map(tag => <li className="tag-index-item"

              >

              <Link to="/home" className="tag-show-link"
                 style={{backgroundImage: `url(${tag.photos[0].image_url})`,  }}
                >
                <div className="tag-data-thumb">{tag.title}  </div>
              </Link>
              </li>)}
          </ul>
        </div>
      </div>

    );
  }
}


export default withRouter(TagIndex);

//    <div className="thumb-overlay"></div>
