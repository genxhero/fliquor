import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login, clearErrors} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
{  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch( clearErrors() )}
);

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
