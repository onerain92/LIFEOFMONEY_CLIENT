import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import Loading from '../screen/Loading';

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    AuthStackNavigator,
    MainStackNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export const AppContainer = createAppContainer(SwitchNavigator);
