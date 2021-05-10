import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  image: {
    minHeight: 150,
    width: Dimensions.get('window').width,
  },
});

export default styles;
