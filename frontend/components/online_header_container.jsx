import {connect} from 'react-redux';
import OnlineHeader from './online_header';
import {logout} from '../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(OnlineHeader);
