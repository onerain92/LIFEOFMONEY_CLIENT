import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Loading from '../screen/Loading';
import AuthStackNavigator from './AuthStackNavigator';

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export const AppContainer = createAppContainer(SwitchNavigator);
