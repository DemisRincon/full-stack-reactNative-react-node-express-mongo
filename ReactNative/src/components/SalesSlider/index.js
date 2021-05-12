import {Dimensions, StyleSheet, View} from 'react-native';

import BannerVisualizer from './BannerVisualizer';
import Carousel from 'react-native-banner-carousel-updated';
import React from 'react';

const BannerWidth = Dimensions.get('window').width;
const images = [
  'https://smhttp-ssl-50034.nexcesscdn.net/pub/media/weltpixel/owlcarouselslider/images/c/o/confort21.jpg',
  'https://smhttp-ssl-50034.nexcesscdn.net/pub/media/weltpixel/owlcarouselslider/images/b/a/banner-dia-de-las-madres_3.jpg',
  'https://smhttp-ssl-50034.nexcesscdn.net/pub/media/wysiwyg/Home/Grid-CasualVestir21.jpg',
];
const SalesSlider = () => {
  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}>
        {images.map((image, index) => (
          <BannerVisualizer key={index} image={image} />
        ))}
      </Carousel>
    </View>
  );
};

export default SalesSlider;

const styles = StyleSheet.create({});
