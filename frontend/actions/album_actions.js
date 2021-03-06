import * as AlbumUtil from  "../util/album_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS ="RECEIVE_ALBUMS"
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAlbum = album => {
  return ({
    type: RECEIVE_ALBUM,
    album
  });
}

export const receiveAlbums = albums => {
return ({
  type: RECEIVE_ALBUMS,
  albums
});
}

export const removeAlbum = albums => ({
  type: REMOVE_ALBUM,
  albums
});


export const receiveErrors = errors => ({
   type: RECEIVE_ERRORS,
   errors
});

export const requestAlbum = albumID => dispatch => (
    AlbumUtil.fetchAlbum(albumID).then(album => (
    dispatch(receiveAlbum(album))),
    errors => (dispatch(receiveErrors(errors)))
  ));

  export const requestAlbums = (albums) => dispatch => (
    AlbumUtil.fetchAlbums(albums).then(albums => (
      dispatch(receiveAlbums(albums)))
    ));

    export const newAlbum = album => dispatch => (
        AlbumUtil.createAlbum(album).then(album => (
        dispatch(receiveAlbum(album))),
        errors => (dispatch(receiveErrors(errors)))
      ));

      export const editAlbum = (album, albumID) => dispatch => (
          AlbumUtil.updateAlbum(album, albumID).then(album => (
          dispatch(receiveAlbum(album))),
          errors => (dispatch(receiveErrors(errors)))
        ));

        export const destroyAlbum = albumID => dispatch => (
            AlbumUtil.deleteAlbum(albumID)
            .then(albums => dispatch(removeAlbum(albums)))
        );
