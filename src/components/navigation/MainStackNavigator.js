import {createStackNavigator} from 'react-navigation-stack';

import Search from '../screen/Search';

export default createStackNavigator(
  {
    Search
  },
  {
    initialRouteName: '',
  },
);
