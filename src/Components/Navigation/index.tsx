import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, Text} from 'react-native';
import {
  LoginScreen,
  MainScreen,
  DetailsScreen,
  AreaStatementScreen,
  MasterPlanScreen,
} from '../../Containers/index';

const Stack = createStackNavigator();

const MyNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='login' component={LoginScreen}></Stack.Screen> */}
      <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}></Stack.Screen>
      <Stack.Screen
        name="AreaStatementScreen"
        component={AreaStatementScreen}></Stack.Screen>
      <Stack.Screen
        name="MasterPlanScreen"
        component={MasterPlanScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MyNavigation;
