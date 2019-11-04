import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CheckMoney(props) {
  return (
    <View style={styles.container}>
      <Text>체크 머니 페이지...</Text>
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

export default CheckMoney;
