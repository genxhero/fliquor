import {connect} from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';
import {deleteTag} from '../actions/joins_actions';


const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoID];
  let user;

  if (photo != undefined) {
    user = requestUser(photo.user_id);
    // user = state.entities.users[photo.user_id];
    // debugger;
  };
  return {
    errors: state.errors,
    photo,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  requestUser: id => dispatch(requestUser(id)),
  deleteTag: id => dispatch(deleteTag(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
