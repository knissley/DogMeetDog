import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomImage = ({ imageName }) => {
  return (
    <Image
      style={styles.image}
      source={imageName}
    />
  )
};

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    height: '100%',
    width: '100%',
  }
});