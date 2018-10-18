import {connect} from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto, destroyPhoto, requestPhotos, createComment, deleteComment } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser, requestUsers} from '../actions/users_actions';
import {deleteTag} from '../actions/joins_actions';


const mapStateToProps = (state, ownProps) => {
//  debugger;
  const photo = state.entities.photos[ownProps.match.params.photoID];
  const currentUser = state.entities.users[state.session.id];
  const comments = Object.values(state.entities.comments);
  // const comments = Object.values(state.entities.comments).filter((comment) => comment.photo_id === photo.id);

//debugger;
  let user;

   if (photo != undefined) {
    user = requestUser(photo.user_id);
   };
  return {
    errors: state.errors,
    photo,
     user,
    currentUser,
    comments,

  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  requestUser: id => dispatch(requestUser(id)),
  deleteTag: id => dispatch(deleteTag(id)),
  destroyPhoto: id => dispatch(destroyPhoto(id)),
  requestPhotos: () => dispatch(requestPhotos()),
  createComment: (formData, photoID) => dispatch(createComment(formData, photoID)),
  deleteComment:  (id) => dispatch(deleteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
