import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import albumsReducer from './albums_reducer';
import tagsReducer from './tags_reducer';
import commentsReducer from './comment_reducer';

const  entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  albums: albumsReducer,
  tags: tagsReducer,
  comments: commentsReducer
});

export default entitiesReducer;
