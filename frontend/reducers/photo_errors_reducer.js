import { RECEIVE_PHOTO, RECEIVE_ERRORS} from '../actions/photos_actions';

const photoErrorsReducer = (state =[], action ) => {
   Object.freeze(state)
   switch(action.type){
     case RECEIVE_ERRORS:
      return action.errors;
      case RECEIVE_PHOTO:
        return [];
     default:
      return state;
   }
};

export default photoErrorsReducer;
