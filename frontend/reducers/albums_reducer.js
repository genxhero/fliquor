import {RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUM} from "../actions/album_actions";
import {merge} from 'lodash';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
       case RECEIVE_ALBUM:
        return merge({}, state, { [action.album.id]: action.album} );

       case RECEIVE_ALBUMS:
        return merge({}, state, action.albums)

       case REMOVE_ALBUM:
        let newState = Object.assign({}, state)
      //  debugger;
        delete newState[action.albums.id]
    //    debugger;

        return newState

       default:
        return state;
    }
};

export default albumsReducer;
