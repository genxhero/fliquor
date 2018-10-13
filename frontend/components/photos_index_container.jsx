import {connect} from 'react-redux';
import PhotosIndex from './photos_index';
import React from 'react';
import { requestPhotos } from '../actions/photos_actions';
import {withRouter} from 'react-router-dom';
//
// const mapStateToProps = (state, ownProps) => {
//   debugger;
// return (
//     {
//       photos: Object.keys(state.entities.photos).map(id => state.entities.photos[id]);
//     }
//       );
//   };

  const mapStateToProps = (state, ownProps) => ({
        photos: Object.keys(state.entities.photos).map(id => state.entities.photos[id])
      });


const mapDispatchToProps =  dispatch  => ({
    requestPhotos: () => dispatch(requestPhotos())
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotosIndex));
