import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screen/Login';

export default createStackNavigator(
  {
    Login: {screen: Login, navigationOptions: {header: null}},
  },
  {
    initialRouteName: 'Login',
  },
);
