// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {LoginManager} from 'react-native-fbsdk';
import {APP_LOGO} from '../../utils/Images';
import {Facebook} from '../../../assets/icons/Icons';

const Login = props => {
  const fbAuth = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          console.log(
            'Login was successful with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function(error) {
        console.log('Login failed with error: ' + error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Image source={APP_LOGO} style={styles.logo} />
      <TouchableOpacity onPress={fbAuth}>
        <View style={styles.loginBtn}>
          <Facebook />
          <View style={styles.line}>
          <Text style={styles.loginTxt}>페이스북으로 시작하기</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  loginBtn: {
    flexDirection: "row",
    width: 280,
    marginTop: 350,
    padding: 20,
    backgroundColor: '#4267B2',
    borderRadius: 5,
    alignItems: "center"
  },
  line: {
    marginLeft: 20,
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderColor: "#364fc7"
  },
  loginTxt: {
    paddingLeft: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: '#ffffff',
  },
});

export default Login;
