/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import MyNavigation from './src/Components/Navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <MyNavigation/>
 </NavigationContainer>
  );
};

export default App;
