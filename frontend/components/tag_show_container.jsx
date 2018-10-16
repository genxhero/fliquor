import {connect} from 'react-redux';
import TagShow from './tag_show';
import { requestPhotos } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
import {requestUser} from '../actions/users_actions';
import {requestTag} from '../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  
  const tag = Object.values(state.entities.tags).find( function(el) { return el.title === ownProps.match.params.tagTitle});
  let photos;
  if (tag != undefined) {
    photos = tag.photos;
  };
  return {
    tag,
    photos
  };
}

const mapDispatchToProps = dispatch => ({
  requestTag: id => dispatch(requestTag(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagShow));
