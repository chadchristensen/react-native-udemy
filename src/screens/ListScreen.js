import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 23 },
    { name: 'Friend #3', age: 30 },
    { name: 'Friend #4', age: 44 },
    { name: 'Friend #5', age: 41 },
    { name: 'Friend #6', age: 42 },
    { name: 'Friend #7', age: 43 },
    { name: 'Friend #8', age: 40 },
  ];

  return (
    <FlatList
      // horizontal (this prop changes scrolling to horizontal)
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          Name: {item.name} - Age: {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
