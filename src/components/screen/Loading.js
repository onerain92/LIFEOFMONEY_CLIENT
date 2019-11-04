import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {APP_LOADING} from '../../utils/Images';

function Loading(props) {
  return (
    <View style={styles.container}>
      <Image source={APP_LOADING} />
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

export default Loading;
