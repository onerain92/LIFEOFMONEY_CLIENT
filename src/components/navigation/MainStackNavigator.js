import {createStackNavigator} from 'react-navigation-stack';

import {MainTabNavigator} from '../navigation/MainTabNavigator';
import Search from '../screen/Search';

export default createStackNavigator(
  {
    MainTabNavigator,
    Search,
  },
  {
    initialRouteName: 'MainTabNavigator',
  },
);
