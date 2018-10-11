import {RECEIVE_PHOTO} from "../actions/photos_actions";


const photosReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo} );
      default:
      return state;
  }
};

export default photosReducer;
