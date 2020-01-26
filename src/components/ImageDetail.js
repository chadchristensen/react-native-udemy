import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = ({ title, imageSource }) => (
  <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
  </View>
);

ImageDetail.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.number,
};

export default ImageDetail;
