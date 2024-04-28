import React from 'react'
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import CustomNavigator from './CustomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="customnav" component={CustomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
