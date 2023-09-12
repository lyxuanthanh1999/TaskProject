/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import AppRouter from './src/navigation';
import store from '../MyP/src/redux/store/config-store.js'
import { Provider } from 'react-redux'


function App() {
  return (

    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
