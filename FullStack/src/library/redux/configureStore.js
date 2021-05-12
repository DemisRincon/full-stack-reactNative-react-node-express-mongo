import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = (initialReduxState = {}) => {
  const middleware = [thunk, logger];
  return createStore(
    rootReducer,
    initialReduxState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};
export default configureStore;
