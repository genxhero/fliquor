import {RECEIVE_PHOTO} from "../actions/photos_actions";
import {merge} from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

    switch(action.type) {
      case RECEIVE_PHOTO:
          debugger;
          if (action.photo.comments === undefined){
            return {};
          }

      return action.photo.comments;
      default:
      return state;
  }
};

export default commentsReducer;
