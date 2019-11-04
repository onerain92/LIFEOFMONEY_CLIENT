import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ResultDetails(props) {
  return (
    <View style={styles.container}>
      <Text>결과 상세 페이지...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResultDetails;
