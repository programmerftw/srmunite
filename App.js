import { StyleSheet, Text, View, Image } from 'react-native';
import StackNavigator from './Apps/Navigator/StackNavigator';
import CustomNavigator from './Apps/Navigator/CustomNavigator';

export default function App() {
  return (
    // Login and Signup
    <StackNavigator />

    // Other Screens (Home, News, etc)
    // <CustomNavigator />
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
