import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {PlusIcon, ResultIcon, MypageIcon} from '../../../assets/icons/Icons';

import CreateRecipient from '../screen/CreateRecipient';
import ListStackNavigator from './ListStackNavigator';
import Mypage from '../screen/Mypage';

export const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    ListStackNavigator: {
      screen: ListStackNavigator,
      navigationOptions: {tabBarLabel: '리스트', tabBarIcon: <ResultIcon />},
      activeTintColor: '#f0edf6',
      inactiveTintColor: '#3e2465',
    },
    CreateRecipient: {
      screen: CreateRecipient,
      navigationOptions: {tabBarLabel: '추가', tabBarIcon: <PlusIcon />},
      activeTintColor: '#3e2465',
      inactiveTintColor: '#f0edf6',
    },
    Mypage: {
      screen: Mypage,
      navigationOptions: {
        tabBarLabel: '내 정보',
        tabBarIcon: <MypageIcon />,
      },
      activeTintColor: '#f0edf6',
      inactiveTintColor: '#3e2465',
    },
  },
  {
    initialRouteName: 'ListStackNavigator',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: {backgroundColor: '#FFE555', padding: 10},
  },
);
