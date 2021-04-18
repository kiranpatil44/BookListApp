/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BookList from "./Screens/BookList"
import MainStackNavigator from './navigation/MainStackNavigation'
import { Provider } from 'react-redux';
import RootReducer from './redux/rootReducer';

import { createStore } from 'redux';
const store = createStore(RootReducer);
const App= () => {

  return (
     <Provider store={ store }>
    <MainStackNavigator  />
    </Provider>
  );
};


export default App;
