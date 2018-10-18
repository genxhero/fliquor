import React from 'react';
import { Link, withRouter, Redirect} from 'react-router-dom';




class PhotoShow extends React.Component {

constructor (props){
  super(props);
  this.state = {
    body: ""
  }
  this.sakujo= this.sakujo.bind(this);
  this.update = this.update.bind(this);
  this.deleteTag = this.deleteTag.bind(this);
  this.getAuthor = this.getAuthor.bind(this);
  this.newCommentMaybe = this.newCommentMaybe.bind(this);
  this.editMaybe = this.editMaybe.bind(this);
  this.addComment = this.addComment.bind(this);
  this.deleteComment = this.deleteComment.bind(this);

}


getAuthor(userID) {
  const author = this.props.requestUser(userID);
  // debugger;
  // let dummy ="butter;"
  return author;
}

componentDidMount() {

  this.props.requestPhoto(this.props.match.params.photoID).then(res =>
    {

    this.props.requestUser(res.photo.photo.user_id);
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

  newCommentMaybe(){

      if (this.props.currentUser) {
        return (
          <div className="comment-form-container">
            <form className="comment-creation" onSubmit={this.addComment}>
                    <textarea className="comment-field"
                       placeholder="Add a comment"
                       onChange={this.update('body')}
                       value={this.state.body}
                       >


                    </textarea>
                    <input className="comment-submit" type="submit" value="Comment"></input>
            </form>
          </div>

        );
      } else {
        return (<div className="commenting-disabled"> Please log in or sign up to comment</div>);

      }
  }

  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
  }

  addComment(e){
    e.preventDefault();
    let formData = new FormData();
    
    formData.append('comment[body]', this.state.body);
    this.props.createComment(formData, this.props.photo.id);
  //  .then(this.props.history.push(`/photos/${this.props.photo.id}`) );
   //.then( res => this.props.history.push(`/photos/${this.props.photo.id}`) );
  }

  deleteComment() {
   //deleteComment
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



    return (
      <div className="photo-page">
        <div className="show-container">
          <div className="show-menu-top"><Link to="/home" id="back-link"><div className="back-arrow"></div> back to Photos</Link></div>
            <img className="show-image" src={this.props.photo.image_url}></img>
            <div className="show-menu-bottom">{this.editMaybe()}</div>
        </div>
        <div className="show-bottom">
          <div className="show-bottom-left">
            <div className="show-user-info">
              <h3 className="show-user-name"> {this.props.photo.user.first_name} {this.props.photo.user.last_name}</h3>
             </div>

            <div className="show-photo-info">
              <h3 className="show-title">{this.props.photo.title} </h3>
              <h3 className="show-desc">{this.props.photo.description} </h3>
            </div>

           <div className="show-photo-comments">
             <div className="comment-spread">
               {this.props.comments.map( comment => {
                  let dummy = "this coder";
                  let author = this.props.requestUser(comment.user_id);
                  let x = "y";

                 return (
                    <div className="comment-single" id={`${comment.id}`}>
                      <div className="comment-author"><Link to={`/users/${comment.user_id}`}>{author.username}</Link></div>
                      <div className="comment-body">{comment.body}</div>
                    </div>
                 );
               }, this)
             }
             </div>
           </div>

               <div className= {this.props.currentUser ?  "comment-form-container" : "blank-div"}>
                 <form className="comment-creation" onSubmit={this.addComment}>
                         <textarea className="comment-field"
                            placeholder="Add a comment"
                            onChange={this.update('body')}
                            value={this.state.body}
                            >
                         </textarea>
                         <input className="comment-submit" type="submit" value="Comment"></input>
                 </form>
               </div>
               <div className={this.props.currentUser ?  "blank-div" : "commenting-disabled"}>"commenting-disabled"> Please log in or sign up to comment</div>

          </div>
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
                    className="tag-bubble-existing" onClick={this.deleteTag} id={`${tag.id}`}> {tag.title}
                  </li>)}
                 </ul>
             </div>
          </div>
       </div>
      </div>
    );
  }

}

export default withRouter(PhotoShow);
//<h3>{comment.user_id === this.props.currentUser.id ? "Deletable" : "Not Deletable"}</h3>

//  {this.props.currentUser.id === comment.user_id ? <div className="delete-x"></div>> : <div></div>}
