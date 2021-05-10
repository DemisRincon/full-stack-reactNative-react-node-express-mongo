import {StyleSheet} from 'react-native';
import {globalConfiguration} from '../../../../library/styles/global';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: globalConfiguration.colors.blue,
  },
  iconContainer: {
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;
