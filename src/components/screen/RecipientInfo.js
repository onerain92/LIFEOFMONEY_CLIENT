import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function RecipientInfo(props) {
  return (
    <View style={styles.container}>
      <Text>상대방 정보 입력 페이지...</Text>
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

export default RecipientInfo;
