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

import CreateRecipient from '../screen/CreateRecipient';
import ListStackNavigator from './ListStackNavigator';
import Mypage from '../screen/Mypage';

export const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    ListStackNavigator,
    CreateRecipient: {screen:CreateRecipient},
    Mypage: {screen: Mypage},
  },
  {
    initialRouteName: 'ListStackNavigator',
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
