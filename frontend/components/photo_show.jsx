import React from 'react';
import { Link, withRouter, Redirect} from 'react-router-dom';




class PhotoShow extends React.Component {

constructor (props){
  super(props);

this.sakujo= this.sakujo.bind(this);
this.deleteTag = this.deleteTag.bind(this);
}

componentDidMount() {
  this.props.requestPhoto(this.props.match.params.photoID).then(res =>
    {
    this.props.requestUser(res.photo.user.id);
  })
}

  componentDidUpdate(previous) {

    if (previous.match.params.photoID !== this.props.match.params.photoID) {
      this.props.requestPhoto(this.props.match.params.photoID);
    }
  // debugger;
  //   if(previous.props.photo.tags !== this.props.photo.tags){
  //      this.props.requestPhoto(this.props.match.params.photoID)
  //  }
  }


  deleteTag(e) {
    e.preventDefault();
    const  tj = this.props.photo.tagjoins.find( (el) => el.tag_id === parseInt(e.currentTarget.id));
    this.props.deleteTag(tj.id);
  }

  expandTag(){

  }

  sakujo(e){
    e.preventDefault();


   this.props.destroyPhoto(this.props.photo.id)
     .then(this.props.history.push("/home"));
  //   .then( this.props.requestPhotos())
  }

  editMaybe() {
    // let dummy = "you";
    // debugger;
    if (this.props.currentUser.id === this.props.photo.user.id){
        return (
      <div className="button-span">
        <Link
        to={`/photos/${this.props.photo.id}/edit`}
        className="album-tb-edit"
        ></Link>
      <div className="photo-destroy-btn"
        onClick={this.sakujo}>
      </div>
    </div>

      );
    } else {
      return (<div ></div>);
    }
  }

  render() {



    if (this.props.photo === undefined || this.props.user === undefined) {
      return 'Loading';
    }

    // const {photo} = this.props;
    if (this.props.location.pathname === '/create'){
      return <div></div>
    }

    const EditButton = () => {
      return (<div></div>);
    };

    const LeftInfo = () => {
      return (
        <div className="show-bottom-left">
          <div className="show-user-info">
            <h3 className="show-user-name"> {this.props.photo.user.first_name} {this.props.photo.user.last_name}</h3>
           </div>

          <div className="show-photo-info">
            <h3 className="show-title">{this.props.photo.title} </h3>
            <h3 className="show-desc">{this.props.photo.description} </h3>
          </div>

         <div className="show-photo-comments">
           <ul>
             <li> Placeholder comments</li>
             <li> Wait until you see the real ones </li>
             <li> Phase V: Electric Boogaloo</li>
           </ul>
         </div>
        </div>
      );
    };

    const RightInfo = () => {
      return(
        <div className="show-bottom-right">
             <ul>
               <li>Dolor ipsum sit amet</li>
             </ul>
             <h6>Album information will go here upon implementation in Phase III: The Quickening</h6>
           <div className="tags-container">
              <div className="tag-heading">
                <h5>Tags </h5>
                <h5> Add Tags</h5>
              </div>
                <ul className="tags-list">
                {this.props.photo.tags.map(tag => <li
                  className="tag-bubble-existing" onClick={this.deleteTag} id={`${tag.id}`}> {tag.title}</li>)}
               </ul>
           </div>




        </div>
      );
    };

    const Bottom = () => {
      return (
        <div className="show-bottom">
        <LeftInfo />
        <RightInfo />
      </div>
      );
    };

    return (
      <div className="photo-page">
        <div className="show-container">
          <div className="show-menu-top"><Link to="/home" id="back-link"><div className="back-arrow"></div> back to Photos</Link></div>
            <img className="show-image" src={this.props.photo.image_url}></img>
            <div className="show-menu-bottom">{this.editMaybe()}</div>
        </div>
        <Bottom />
      </div>
    );
  }

}

export default withRouter(PhotoShow);
