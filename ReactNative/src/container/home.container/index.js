import {SafeAreaView, ScrollView} from 'react-native';
import {SalesSlider, VerticalContainer} from '../../components';

import React from 'react';
import mostsellarticles from '../../library/constants/mostSell.json'
import styles from './styles';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <SalesSlider />
      <VerticalContainer text="Most sell" articles={mostsellarticles} />
      <VerticalContainer text="What you saw" articles={mostsellarticles} />
    </ScrollView>
  );
};

export default Home;
