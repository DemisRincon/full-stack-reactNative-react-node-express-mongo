import {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
export const useHideSplashScreen = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);
};
