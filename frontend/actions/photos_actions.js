import * as PhotosUtil from "../util/photos_util";

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ERRORS ='RECEIVE_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
   type: RECEIVE_ERRORS,
   errors
});

export const newPhoto = photo => dispatch => (
    PhotosUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  ));