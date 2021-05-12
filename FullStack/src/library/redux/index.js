import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './configureStore';

export const withRedux = PageComponent => {
  const WithRedux = ({initialReduxState, ...props}) => {
    const store = configureStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };
  return WithRedux;
};
