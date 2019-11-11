import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, StyleSheet, Dimensions} from 'react-native';
import {APP_LOADING} from '../../utils/Images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Loading = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('AuthStackNavigator');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={APP_LOADING} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: width,
    height: height
  }
});

export default Loading;
