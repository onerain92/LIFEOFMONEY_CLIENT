import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screen/Login';

export default createStackNavigator(
  {
    Login
  },
  {
    initialRouteName: 'Login',
  },
);
