import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/Styles';
import AsyncStorage from '@react-native-community/async-storage';

function Search(props) {
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('AuthStackNavigator');
  }

  return (
    <View style={styles.container}>
      <Text>검색 페이지...</Text>
      <TouchableOpacity onPress={logout}>
        <View style={styles.logoutBtn}>
          <View style={styles.line}>
            <Text style={styles.logoutTxt}>로그아웃</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});

export default Search;
