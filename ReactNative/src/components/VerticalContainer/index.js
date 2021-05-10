import {Text, View} from 'react-native';

import React from 'react';
import {SmallArticle} from '..';
import styles from './styles';

const VerticalContainer = ({text, articles = []}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{text}</Text>
        {articles.map(item => (
          <SmallArticle key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
};

export default VerticalContainer;
