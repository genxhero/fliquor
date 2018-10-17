import {connect} from 'react-redux';
import AlbumShow from './album_show';
import { requestPhotos } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';
import {requestAlbum, destroyAlbum} from '../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = Object.values(state.entities.users)[0];
  const album = state.entities.albums[ownProps.match.params.albumID];
  let user, photos;

  if (album != undefined) {
    user = requestUser(album.user_id);
    photos = album.photos;
  };
     return {
       album,
       photos,
       user,
       currentUser
     };
};

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id)),
 destroyAlbum: id => dispatch(destroyAlbum(id)),
  requestUser: id => dispatch(requestUser(id)),
  requestPhotos: id => dispatch(requestPhotos(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumShow));
