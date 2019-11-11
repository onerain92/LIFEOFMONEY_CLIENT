import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const AddEvent = props => {
  const id = props.navigation.getParam('id', 'No id');
  const name = props.navigation.getParam('name', 'No name');
  const relation = props.navigation.getParam('relation', 'No relation');

  return (
    <SafeAreaView style={styles.container}>
      <Text>{relation}</Text>
      <Text>{name}가</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddEvent;
