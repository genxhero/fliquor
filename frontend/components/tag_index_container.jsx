import {connect} from 'react-redux';
import TagIndex from './tag_index';
import React from 'react';
import { requestTags } from '../actions/tag_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const tags = Object.keys(state.entities.tags).map(id =>state.entities.tags[id]);
  return {
    tags
  }
}
const mapDispatchToProps =  dispatch  => ({
  requestTags: () => dispatch(requestTags())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagIndex));
