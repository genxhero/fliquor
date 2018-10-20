import {RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO} from "../actions/photos_actions";
import {REMOVE_TAG} from "../actions/joins_actions";
import {merge} from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_PHOTO:
    
      return merge({}, state, { [action.photo.photo.id]: action.photo.photo} );

      case RECEIVE_PHOTOS:

      return merge({}, state, action.photos)

      case  REMOVE_TAG:
      let newState = Object.assign({}, state)

      return Object.assign(newState, {[action.photo.photo.id]: action.photo.photo})

      case REMOVE_PHOTO:
      let nooState = Object.assign({}, state)
      delete nooState[action.photos.photo.id]

      return nooState

      default:
      return state;
  }
};

export default photosReducer;
