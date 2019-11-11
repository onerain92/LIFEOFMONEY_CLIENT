// @flow
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {getUser} from '../../api/index';
import {saveUser} from '../../actions/index';
import {APP_LOGO} from '../../utils/Images';
import {FacebookIcon} from '../../../assets/icons/Icons';

const Login = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    confirmToken();
  }, []);

  const confirmToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        getUser(token).then(data => {
          if (data.user) {
            dispatch(saveUser(data.user));
            setTimeout(() => {
              props.navigation.navigate('MainStackNavigator');
            }, 2000);
          }
        });
      }
    } catch (error) {
      console.log("Can't read token");
    }
  };

  const fbAuth = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken()
            .then(async data => {
              await AsyncStorage.setItem('token', data.accessToken);
              getUser(data.accessToken).then(data => {
                if (data.user) {
                  dispatch(saveUser(data.user));
                  props.navigation.navigate('MainStackNavigator');
                } else {
                  props.navigation.navigate('AuthStackNavigator');
                }
              });
            })
            .catch(error => {
              console.log('Token is not published');
            });
        }
      },
      error => {
        console.log('Login failed with error: ' + error);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={APP_LOGO} style={styles.logo} />
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="#0000ff"
      />
      <TouchableOpacity onPress={fbAuth}>
        <View style={styles.loginBtn}>
          <FacebookIcon />
          <View style={styles.line}>
            <Text style={styles.loginTxt}>페이스북으로 시작하기</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE555',
  },
  logo: {
    width: 280,
    height: 80,
    marginBottom: 300,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loginBtn: {
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
  loginTxt: {
    paddingLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Login;
