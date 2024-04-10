import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import OTP from '../Screens/OTP';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style='inverted'/>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="otp" component={OTP} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
