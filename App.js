import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Apps/Navigator/StackNavigator';
import BottomNavigator from './Apps/Navigator/BottomNavigator';

export default function App() {
  return (
    // Login and Signup
    <StackNavigator />

    // Other Screens (Home, News, etc)
    // <BottomNavigator />

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
