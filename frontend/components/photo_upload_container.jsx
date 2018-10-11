import PhotoUpload from './photo_upload';
import {connect} from 'react-redux';
import {newPhoto} from '../actions/photos_actions';


const mapStateToProps  = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => (
  {newPhoto: (photo) => dispatch(newPhoto(photo))}
);

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);
