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

import {ratio, colors, statusBarHeight} from '../../utils/Styles';
import {
  Money_Black,
  Mypage_Black,
  Result_Black,
  Search_Black,
} from '../../utils/Icons';

import Mypage from '../screen/Mypage';
import RecipientInfo from '../screen/RecipientInfo';
import Result from '../screen/Result';

export const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    Mypage,
    RecipientInfo,
    Result
  },
  {
    initialRouteName: 'Screen1',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        return (
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={Money_Black}
          />
        );
      },
    }),
  },
);
