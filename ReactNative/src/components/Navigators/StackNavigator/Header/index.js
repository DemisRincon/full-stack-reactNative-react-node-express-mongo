import {Text, TouchableOpacity, View} from 'react-native';
import {
  faArrowLeft,
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {SearchBar} from '../../..';
import styles from './styles';

const Header = ({navigate, menu}) => {
  if (!menu) {
    return (
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          style={styles.iconContainer}>
          <FontAwesomeIcon size={24} icon={faArrowLeft} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <Text style={styles.headerText}>Carrito</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon size={24} icon={faBars} color="#fff" />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search..." />
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigate('Cart')}>
        <FontAwesomeIcon size={24} icon={faShoppingCart} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
