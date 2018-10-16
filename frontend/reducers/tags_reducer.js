import {RECEIVE_TAGS, RECEIVE_TAG} from "../actions/tag_actions";
import {merge} from 'lodash';

const tagsReducer = (state = {}, action) => {
   Object.freeze(state);
   switch(action.type) {
     case RECEIVE_TAG:
     return merge({}, state, {[action.tag.id]: action.tag});
     case RECEIVE_TAGS:
     return merge ({}, state, action.tags)
     default:
     return state;
   }

};

export default tagsReducer;
