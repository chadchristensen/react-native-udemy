import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

const ComponentsScreen = () => {
  const myName = 'Chad';
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.nameStyle}>My name is {myName}</Text>
    </View>
  );
};

export default ComponentsScreen;
