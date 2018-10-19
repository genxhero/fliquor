import * as PhotosUtil from "../util/photos_util";
import * as CommentUtil from "../util/comment_util";
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const RECEIVE_ERRORS ='RECEIVE_ERRORS';
export const REMOVE_PHOTO ="REMOVE_PHOTO";
export const REMOVE_COMMENT="REMOVE_COMMENT";

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const removePhoto = (photos) => ({
  type: REMOVE_PHOTO,
  photos
});

export const removeComment = photo => {

  {
  type: REMOVE_COMMENT,
  photo
}
};

export const receiveErrors = errors => ({
   type: RECEIVE_ERRORS,
   errors
});


export const newPhoto = photo => dispatch => (
    PhotosUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))),
    errors => (dispatch(receiveErrors(errors)))
  ));


  export const requestPhoto = photoID => dispatch => (
      PhotosUtil.fetchPhoto(photoID).then(photo => (
      dispatch(receivePhoto(photo))),
      errors => (dispatch(receiveErrors(errors)))
    ));

export const requestPhotos = (photos) => dispatch => (
  PhotosUtil.fetchPhotos(photos).then(photos => (
    dispatch(receivePhotos(photos)))
  ));

 export const editPhoto = (photo, photoID) => dispatch => (
   PhotosUtil.updatePhoto(photo, photoID).then(photo => (
   dispatch(receivePhoto(photo))),
   errors => (dispatch(receiveErrors(errors)))
 ));

  export const destroyPhoto = photoID => dispatch => (
    PhotosUtil.deletePhoto(photoID)
    .then(photos => dispatch(removePhoto(photos)))
  );

  export const deleteComment = commentID => dispatch => (
    CommentUtil.destroyComment(commentID)
    .then(photo => dispatch(receivePhoto(photo)))
  );

  export const createComment = (formData, photoID ) => dispatch => (
    CommentUtil.createComment(formData, photoID)
    .then(photo => dispatch(receivePhoto(photo)))
  );
