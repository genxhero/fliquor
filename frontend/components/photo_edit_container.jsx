import PhotoEdit from './photo_edit';
import {connect} from 'react-redux';
import {requestTags} from '../actions/tag_actions';
import {editPhoto, destroyPhoto} from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoID];
  const currentUser = state.entities.users[state.session.id];
  return {
    errors: state.errors,
    photo,
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    requestPhoto: id => dispatch(requestPhoto(id)),
    editPhoto: (formData, photoID) => dispatch(editPhoto(formData, photoID)),
    destroyPhoto: id => dispatch(destroyPhoto(id)),

  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoEdit));
