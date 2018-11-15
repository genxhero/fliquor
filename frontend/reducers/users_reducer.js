import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/users_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return merge({}, state, { [action.currentUser.id]: action.currentUser} );
      case RECEIVE_USER:
      let dummy = "you";
      debugger;
      let bobb = "edd";
        return ({}, state, {[action.user.id]: action.user});
      default:
        return state;
  }
};

export default usersReducer;
