import {combineReducers} from 'redux';

import sessionErrorReducer from './session_error_reducer';
import photoErrorsReducer from './photo_errors_reducer';
import albumErrorsReducer from './album_errors_reducer';


const errorReducer = combineReducers({
  session: sessionErrorReducer,
  photos: photoErrorsReducer,
  albums: albumErrorsReducer
});

export default errorReducer;
