import {Platform, StatusBar} from 'react-native';
import React, {Fragment} from 'react';

import {StackNavigator} from './src/components';
import {useHideSplashScreen} from './src/library/hooks';

const App = () => {
  useHideSplashScreen();
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <StackNavigator />
    </Fragment>
  );
};
export default App;
