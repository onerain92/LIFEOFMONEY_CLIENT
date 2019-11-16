import {View, Image, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import {MainTabNavigator} from '../navigation/MainTabNavigator';
import Search from '../screen/Search';

import {APP_LOGO} from '../../utils/Images';

export default createStackNavigator(
  {
    MainTabNavigator,
    Search,
  },
  {
    initialRouteName: 'MainTabNavigator',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
