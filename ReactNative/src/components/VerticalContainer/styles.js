import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  dataContainer: {
    borderRadius: 10,
    backgroundColor: 'white',

    paddingVertical: 10,
    shadowColor: '#000',

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 9,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
export default styles;
