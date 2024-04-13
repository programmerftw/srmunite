import { StyleSheet, Text, View, Image } from 'react-native';
import OTP from './Apps/Screens/OTP';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Apps/Navigator/StackNavigator';
import BottomNavigator from './Apps/Navigator/BottomNavigator';

export default function App() {
  return (
    // Login and Signup
    // <StackNavigator />
    // <OTP/>

    // Other Screens (Home, News, etc)
    <BottomNavigator />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff'
  },
});
