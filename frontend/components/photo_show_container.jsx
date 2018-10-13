import {connect} from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';


const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoID];
  let user;
  if (photo != undefined) {
    user = state.entities.users[photo.user_id];
  };
  return {
    errors: state.errors,
    photo,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  requestUser: id => dispatch(requestUser(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
