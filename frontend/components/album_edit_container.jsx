import {connect} from 'react-redux';
import AlbumEdit from './album_edit';
import { requestPhotos } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';
import {requestAlbum, editAlbum} from '../actions/album_actions';
import {getPhotosByUser} from '../reducers/selectors';



const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumID];
  const currentUser = state.entities.users[state.session.id];
  const allPhotos = requestPhotos();
  const photos = getPhotosByUser(state, currentUser.id);

  //;
     return {
       errors: state.errors,
       album,
       photos,
       currentUser
     };
};

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id)),
  requestUser: id => dispatch(requestUser(id)),
  requestPhotos: id => dispatch(requestPhotos(id)),
  editAlbum: (formData, albumID) => dispatch(editAlbum(formData, albumID))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumEdit));
