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
      <VerticalContainer text="Lo más vendido" articles={mostsellarticles} />
      <VerticalContainer text="Basado en lo que viste" articles={mostsellarticles} />
    </ScrollView>
  );
};

export default Home;
