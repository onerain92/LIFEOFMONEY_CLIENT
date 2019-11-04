import {createStackNavigator} from 'react-navigation';
import Login from '../screen/Login';

export default createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
  },
);
