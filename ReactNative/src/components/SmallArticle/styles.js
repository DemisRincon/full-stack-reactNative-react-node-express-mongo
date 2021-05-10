import {StyleSheet} from 'react-native';
import {globalConfiguration} from '../../library/styles/global';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    minHeight: 100,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  image: {
    height: '100%',
    width: 100,
    marginRight: 10,
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  diasbled: {
    display: 'none',
  },
  slashedPrice: {
    textDecorationLine: 'line-through',
    marginRight: 20,
    color: globalConfiguration.colors.red,
  },
  normalPrice: {
    fontSize: 16,
    color: globalConfiguration.colors.blue,
  },
  BlueFont: {
    color: globalConfiguration.colors.blue,
  },
});

export default styles;
