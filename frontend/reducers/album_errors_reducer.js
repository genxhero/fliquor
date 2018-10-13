import { RECEIVE_ALBUM, RECEIVE_ERRORS} from '../actions/album_actions';

const albumErrorsReducer = (state =[], action ) => {
   Object.freeze(state)
   switch(action.type){
     case RECEIVE_ERRORS:
      return action.errors;
      case RECEIVE_ALBUM:
        return [];
     default:
      return state;
   }
};

export default albumErrorsReducer;
