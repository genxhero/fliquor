import {connect} from 'react-redux';
import AlbumIndex from './album_index';
import React from 'react';
import { requestAlbums } from '../actions/album_actions';
import {withRouter} from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => ({
//       albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
//     });


const mapStateToProps = (state, ownProps) => {

  const albums =  Object.keys(state.entities.albums).map(id => state.entities.albums[id]);
   return {
     albums
   }
};

const mapDispatchToProps =  dispatch  => ({
  requestAlbums: () => dispatch(requestAlbums())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumIndex));
