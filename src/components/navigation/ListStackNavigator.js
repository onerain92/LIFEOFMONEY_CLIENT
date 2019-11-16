import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import AddEvent from '../screen/AddEvent';
import DecisionMaker from '../screen/DecisionMaker';
import List from '../screen/List';
import ListDetails from '../screen/ListDetails';

import {SearchIcon} from '../../../assets/icons/Icons';

export default createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: '리스트',
        headerStyle: {
          backgroundColor: '#FFE555',
        },
        headerTintColor: '#000000',
        headerBackTitle: '뒤로',
      },
    },
    ListDetails: {
      screen: ListDetails,
      navigationOptions: {
        title: '지출 및 수입',
        headerStyle: {
          backgroundColor: '#FFE555',
        },
        headerTintColor: '#000000',
        headerBackTitle: '뒤로',
      },
    },
    AddEvent: {
      screen: AddEvent,
      navigationOptions: {
        title: '추가',
        headerStyle: {
          backgroundColor: '#FFE555',
        },
        headerTintColor: '#000000',
        headerBackTitle: '뒤로',
      },
    },
    DecisionMaker: {
      screen: DecisionMaker,
      navigationOptions: {
        title: '질문',
        headerStyle: {
          backgroundColor: '#FFE555',
        },
        headerTintColor: '#000000',
        headerBackTitle: '뒤로',
      },
    },
  },
  {
    initialRouteName: 'List',
  },
);
