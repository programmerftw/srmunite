import { StyleSheet, Text, View, Image } from 'react-native';
import OTP from './Apps/Screens/OTP';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Apps/Navigator/StackNavigator';
import CustomNavigator from './Apps/Navigator/CustomNavigator';
import Profile from './Apps/Screens/Profile'
import NewsExtended from './Apps/Screens/NewsExtended'

export default function App() {
  return (
    // Login and Signup
    // <StackNavigator />

    // Other Screens (Home, News, etc)
    <CustomNavigator />
    // <Profile/>
    // <NewsExtended/>
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
