import {connect} from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto, destroyPhoto, requestPhotos, createComment, deleteComment } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';
import {deleteTag} from '../actions/joins_actions';


const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoID];
  const currentUser = Object.values(state.entities.users)[0];
  const comments = Object.values(state.entities.comments);

  let user;

   if (photo != undefined) {
    user = requestUser(photo.user_id);
   };
  return {
    errors: state.errors,
    photo,
     user,
    currentUser,
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  requestUser: id => dispatch(requestUser(id)),
  deleteTag: id => dispatch(deleteTag(id)),
  destroyPhoto: id => dispatch(destroyPhoto(id)),
  requestPhotos: () => dispatch(requestPhotos()),
  createComment: (formData, photoID) => dispatch(createComment(formData, photoID)),
  deleteComment:  (id) => dispatch(delteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
