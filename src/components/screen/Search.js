import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/Styles';

function Search(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>검색 페이지...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default Search;
