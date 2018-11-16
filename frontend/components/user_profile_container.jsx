import {connect} from 'react-redux';
import UserProfile from './user_profile';
import { getPhotosByUser } from "../reducers/selectors.js";
import { requestPhotos } from "../actions/photos_actions";
import {requestUser} from "../actions/users_actions";
import { withRouter } from 'react-router-dom';




const mapStateToProps = (state, ownProps) => {
    // const photos = (state, )
   
    const currentUser = state.entities.users[state.session.id];
    // const photos = getPhotosByUser(state, user.id);
     
    const photos = state.entities.photos;
    // debugger;
    return {
        currentUser,
        photos
    };

};

const mapDispatchToProps = dispatch => ({
    requestUser: id => dispatch(requestUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
