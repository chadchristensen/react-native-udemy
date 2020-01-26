import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const greeting = 'hello';
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`More ${color}`} />
      <Button onPress={onDecrease} title={`Less ${color}`} />
    </View>
  );
};

ColorCounter.propTypes = {
  color: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({});

export default ColorCounter;
