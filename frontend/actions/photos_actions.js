import * as PhotosUtil from "../util/photos_util";

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const RECEIVE_ERRORS ='RECEIVE_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

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
