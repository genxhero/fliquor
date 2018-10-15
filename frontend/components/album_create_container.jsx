import AlbumCreate from './album_create';
import {connect} from 'react-redux';
import { Link, withRouter} from 'react-router-dom';
import {newAlbum} from '../actions/album_actions';
import {requestPhotos} from '../actions/photos_actions';
import {getPhotosByUser} from '../reducers/selectors';


const mapStateToProps  = (state, ownProps) => {
  const currentUser = Object.values(state.entities.users)[0];
  const allPhotos = requestPhotos();
  const photos = getPhotosByUser(state, currentUser.id);
//debugger;
  return {
      errors: state.errors,
      currentUser,
      photos
   };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {newAlbum: (album) => dispatch(newAlbum(album))}
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumCreate));
