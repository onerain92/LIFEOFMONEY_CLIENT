import React from 'react';
import { useSelector } from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {colors} from '../../utils/Styles';

const Mypage = props => {
  const user = useSelector(state => state.user);
  console.log(user);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('AuthStackNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.profileImage}>
          <Image source={{uri: user.picture}} />
        </View>
        <View>
          <Text>{user.username}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={logout}>
        <View style={styles.logoutBtn}>
          <View style={styles.line}>
            <Text style={styles.logoutTxt}>로그아웃</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text>내가 쓴 총 금액</Text>
      <Text></Text>
      <Text>내가 받은 총 금액</Text>
      <Text></Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100
  },
  logoutBtn: {
    flexDirection: 'row',
    width: 280,
    padding: 20,
    backgroundColor: '#4267B2',
    borderRadius: 5,
    alignItems: 'center',
  },
  line: {
    marginLeft: 20,
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderColor: '#364fc7',
  },
  logoutTxt: {
    paddingLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Mypage;
