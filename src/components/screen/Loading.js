import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
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
    <View style={styles.container}>
      <Image style={styles.img} source={APP_LOADING} />
    </View>
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
