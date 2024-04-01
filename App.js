import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Apps/Screens/Login';
import Signup from './Apps/Screens/Signup';
import Colors from './Apps/Utils/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="inverted" />
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
