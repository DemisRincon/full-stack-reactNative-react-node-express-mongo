import Login from '../../index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doLogin} from '../actions';

export default connect(
  ({userReducer: {user}}) => ({user}),
  dispatch =>
    bindActionCreators(
      {
        doLogin,
      },
      dispatch,
    ),
)(Login);
