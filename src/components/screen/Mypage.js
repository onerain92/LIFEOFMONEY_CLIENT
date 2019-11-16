import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {getTotalMoney} from '../../api/index';
import {saveTotalSpendMoney, saveTotalReceivedMoney} from '../../actions/index';
import {SMILE, CRYING} from '../../utils/Images';

const width = Dimensions.get('window').width;

const Mypage = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const totalSpendMoney = useSelector(state => state.totalSpendMoney);
  const totalReceivedMoney = useSelector(state => state.totalReceivedMoney);
  const diffrence = totalSpendMoney + totalReceivedMoney;

  useEffect(() => {
    getTotalMoney(user.id).then(data => {
      dispatch(saveTotalSpendMoney(data.totalSpendMoney));
      dispatch(saveTotalReceivedMoney(data.totalReceivedMoney));
    });
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('AuthStackNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.imgWrapper}>
          <Image source={{uri: user.picture}} style={styles.profileImage} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.username}>{user.username}</Text>
          <TouchableOpacity onPress={logout}>
            <View style={styles.logoutBtn}>
              <Text style={styles.logoutTxt}>로그아웃</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.gifWrapper}>
        {diffrence >= 0 ? (
          <View >
            <View style={styles.speechBallon}>
              <Text style={styles.speechPlusText}>흑자다!</Text>
            </View>
            <View>
              <Image source={SMILE} style={styles.gifAnimation} />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.speechBallon}>
              <Text style={styles.speechMinusText}>적자네ㅠ</Text>
            </View>
            <View>
              <Image source={CRYING} style={styles.gifAnimation} />
            </View>
          </View>
        )}
      </View>

      <View style={styles.totalInfoWrapper}>
        <View style={styles.totalSpendWrapper}>
          <Text style={styles.totalSpendText}>총 지출</Text>
          <Text style={styles.totalSpendMoney}>{totalSpendMoney}</Text>
        </View>
        <View style={styles.totalRecivedWrapper}>
          <Text style={styles.totalReceivedText}>총 수입</Text>
          <Text style={styles.totalReceivedMoney}>{totalReceivedMoney}</Text>
        </View>
        <View style={styles.totalSumWrapper}>
          <Text style={styles.totalSumText}>합계</Text>
          <Text
            style={diffrence >= 0 ? styles.totalPlusSum : styles.totalMinusSum}>
            {diffrence}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  profileWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 60,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ced4da',
  },
  imgWrapper: {
    flex: 0.3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#f1f3f5',
    borderRadius: 50,
  },
  infoWrapper: {
    flex: 0.5,
  },
  username: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#868e96',
    alignItems: 'center',
  },
  logoutTxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  gifWrapper: {
    flex: 0.4,
    position: 'relative',
    marginTop: 20,
    marginBottom: 40,
  },
  gifAnimation: {
    width: 200,
    height: 200,
  },
  speechBallon: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#dee2e6',
    backgroundColor: '#ffffff',
  },
  speechPlusText: {
    fontSize: 15,
    color: '#495057',
  },
  speechMinusText: {
    fontSize: 15,
    color: '#495057',
  },
  totalInfoWrapper: {
    flex: 0.35,
    width: width * 0.7,
  },
  totalSpendWrapper: {
    position: 'relative',
    paddingBottom: 20,
  },
  totalSpendText: {
    fontSize: 20,
    color: '#fa5252',
  },
  totalSpendMoney: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
    color: '#fa5252',
  },
  totalRecivedWrapper: {
    position: 'relative',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  totalReceivedText: {
    fontSize: 20,
    color: '#00A67A',
  },
  totalReceivedMoney: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
    color: '#00A67A',
  },
  totalSumWrapper: {
    position: 'relative',
    flexDirection: 'row',
    padding: 20,
  },
  totalSumText: {
    fontSize: 20,
    color: '#495057',
  },
  totalPlusSum: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 20,
    color: '#00A67A',
  },
  totalMinusSum: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 20,
    color: '#fa5252',
  },
});

export default Mypage;
