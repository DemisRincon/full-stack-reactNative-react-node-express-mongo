import {combineReducers} from 'redux';
import userReducer from 'frontend/containers/login/redux/reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
