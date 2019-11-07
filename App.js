/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import lifeOfMoney from './src/reducers';
import {AppContainer} from './src/components/navigation/SwitchNavigator';

const store = createStore(lifeOfMoney);

const App = props => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
