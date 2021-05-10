import {Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './styles';

const SmallArticle = ({msi, price, discount, salesPrice, name, imgs}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: imgs[0]}} />
      <View style={styles.dataContainer}>
        <Text>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={discount ? styles.slashedPrice : styles.normalPrice}>
            ${price.toFixed(2)}
          </Text>
          <Text style={!discount ? styles.diasbled : styles.BlueFont}>
            {discount}% Descuento
          </Text>
        </View>
        <Text style={discount ? styles.normalPrice : styles.diasbled}>
          ${salesPrice.toFixed(2)}
        </Text>
        <Text>Hasta {msi} msi</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SmallArticle;
