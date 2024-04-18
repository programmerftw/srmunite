import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomFonts from './CustomFonts'
import ProfileButton from './ProfileButton'

export default function Header({ headText, fontFamily, fontSize,  routeName }) {
  const fontloaded = CustomFonts()
  if (!fontloaded) {
    return null;
  }
  const shouldShowProfileButton = () => {
    return routeName !== 'News' && routeName !== 'LostAndFound';
  };
  return (
    <View>
      <View style={styles.head}>
        <Text style={[styles.text, { fontFamily: fontFamily, fontSize: fontSize }]}>{headText}</Text>
        {shouldShowProfileButton() && <ProfileButton />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 15,
    marginBottom: 35
  },
})