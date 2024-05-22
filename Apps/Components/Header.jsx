import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React,{useState} from 'react'
import CustomFonts from './CustomFonts'
import ProfileButton from './ProfileButton'
import Colors from '../Utils/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ headText, fontFamily, fontSize }) {

  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const [username,setUsername] = useState("");
  const fontloaded = CustomFonts()
  if (!fontloaded) {
    return null;
  }

  const getUsername = async () => {
    try {
        const username = await AsyncStorage.getItem('username');
        return username;
    } catch (error) {
        console.error('Error getting username:', error);
        return null;
    }
};
getUsername().then(username => {
  if (username) {
    setUsername(username);   
  } else {
      console.log('No username found.');
  }
});

  return (
    <View>
      <View style={styles.head}>
        <Text style={[themeTextStyle, { fontFamily: fontFamily, fontSize: fontSize }]}>{headText}</Text>
        <ProfileButton data={username}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  lightThemeText: {
    color: 'black'
  },
  darkThemeText: {
    color: "white"
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 15,
    marginBottom: 35
  },
})