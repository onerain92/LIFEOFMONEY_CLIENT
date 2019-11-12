import {createStackNavigator} from 'react-navigation-stack';

import AddEvent from '../screen/AddEvent';
import DecisionMaker from '../screen/DecisionMaker';
import List from '../screen/List';
import ListDetails from '../screen/ListDetails';

export default createStackNavigator(
  {
    List: {screen: List, navigationOptions: {header: null}},
    ListDetails: {screen: ListDetails, navigationOptions: {header: null}},
    AddEvent: {screen: AddEvent, navigationOptions: {header: null}},
    DecisionMaker: {screen: DecisionMaker, navigationOptions: {header: null}},
  },
  {
    initialRouteName: 'List',
  },
);
