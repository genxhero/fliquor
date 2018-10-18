import {RECEIVE_PHOTO} from "../actions/photos_actions";
import {merge} from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_PHOTO:
      // let dummy;
      //   debugger;
      // let scapegoat;
      return action.photo.photo.comments;
      default:
      return state;
  }
};

export default commentsReducer;
