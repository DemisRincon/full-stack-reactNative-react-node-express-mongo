import React from 'react';
import {TextInput, View} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
const SearchBar = ({...props}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchBar} {...props} />
      <FontAwesomeIcon size={14} icon={faSearch} color="#ccc" />
    </View>
  );
};

export default SearchBar;
