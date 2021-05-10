import {Image, View} from 'react-native';

import React from 'react';
import styles from './styles';

const BannerVisualizer = ({image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};

export default BannerVisualizer;
