import {createStackNavigator} from 'react-navigation-stack';

import RecipientInfo from '../screen/RecipientInfo';
import CheckMoney from '../screen/CheckMoney';

export default createStackNavigator(
  {
    RecipientInfo: {screen: RecipientInfo, navigationOptions: {header: null} },
    CheckMoney: {screen: CheckMoney, navigationOptions: {header: null}},
  },
  {
    initialRouteName: 'RecipientInfo',
  },
);
