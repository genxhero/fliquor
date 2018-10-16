import {RECEIVE_PHOTO, RECEIVE_PHOTOS} from "../actions/photos_actions";
import {REMOVE_TAG} from "../actions/joins_actions";
import {merge} from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo} );
      case RECEIVE_PHOTOS:
      return merge({}, state, action.photos)
      case  REMOVE_TAG:

      let newState = Object.assign({}, state)
      return Object.assign(newState, {[action.photo.id]: action.photo})
      default:
      return state;
  }
};

export default photosReducer;
