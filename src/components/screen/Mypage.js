import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/Styles';

function Mypage(props) {
  return (
    <View style={styles.container}>
      <Text>마이 페이지.</Text>
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

export default Mypage;
