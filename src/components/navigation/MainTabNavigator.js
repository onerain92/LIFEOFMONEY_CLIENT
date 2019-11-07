import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
  AsyncStorage,
  BackHandler,
  StyleSheet,
} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// import {ratio, colors, statusBarHeight} from '../../utils/Styles';
import {
  CheckMoneyIcon,
  ResultIcon,
  MypageIcon,
} from '../../../assets/icons/Icons';

import CheckMoneyStackNavigator from '../navigation/CheckMoneyStackNavigator';
import Mypage from '../screen/Mypage';
import RecipientInfo from '../screen/RecipientInfo';
import Result from '../screen/Result';

export const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    CheckMoneyStackNavigator,
    Mypage: {screen: Mypage},
    Result: {screen: Result},
  },
  {
    initialRouteName: 'Mypage',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: {backgroundColor: '#FFE555'},
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        return (
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={<MypageIcon />}
          />
        );
      },
    }),
  },
);
