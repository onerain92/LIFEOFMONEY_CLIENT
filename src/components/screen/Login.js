// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {APP_LOGO} from '../../utils/Images';
import {colors} from '../../utils/Styles';

function Login(props) {
  return (
    <View style={styles.container}>
      <Text>로그인 페이지.</Text>
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

export default Login;
