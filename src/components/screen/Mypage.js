import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {getTotalMoney} from '../../api/index';
import {saveTotalSpendMoney, saveTotalReceivedMoney} from '../../actions/index';

const Mypage = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const totalSpendMoney = useSelector(state => state.totalSpendMoney);
  const totalReceivedMoney = useSelector(state => state.totalReceivedMoney);

  useEffect(() => {
    getTotalMoney(user.id).then(data => {
      dispatch(saveTotalSpendMoney(data.totalSpendMoney));
      dispatch(saveTotalReceivedMoney(data.totalReceivedMoney));
    })
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('AuthStackNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image source={{uri: user.picture}} style={styles.profileImage} />
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
      <Text>{totalSpendMoney}</Text>
      <Text>내가 받은 총 금액</Text>
      <Text>{totalReceivedMoney}</Text>

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
