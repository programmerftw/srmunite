import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import CustomFonts from './CustomFonts'
import ProfileButton from './ProfileButton'
import Colors from '../Utils/Colors'

export default function Header({ headText, fontFamily, fontSize }) {

  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  
  const fontloaded = CustomFonts()
  if (!fontloaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.head}>
        <Text style={[themeTextStyle, { fontFamily: fontFamily, fontSize: fontSize }]}>{headText}</Text>
        <ProfileButton />
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