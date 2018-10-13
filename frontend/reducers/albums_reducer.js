import {RECEIVE_ALBUM} from "../actions/ALBUM_actions";
import {merge} from 'lodash';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album} );
      // case RECEIVE_ALBUMS:
      // return merge({}, state, action.albums
      default:
      return state;
  }
};

export default albumsReducer;