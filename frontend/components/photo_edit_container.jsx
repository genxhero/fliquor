import PhotoEdit from './photo_edit';
import {connect} from 'react-redux';
import {requestTags} from '../actions/tag_actions';
import {editPhoto, destroyPhoto} from '../actions/photos_actions';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoID];
  const currentUser = Object.values(state.entities.users)[0];
debugger;
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoEdit);
