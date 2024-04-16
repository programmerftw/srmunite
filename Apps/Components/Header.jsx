import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomFonts from './CustomFonts'
import ProfileButton from './ProfileButton'

export default function Header({headText,fontFamily,fontSize}) {
    const fontloaded = CustomFonts()
    if (!fontloaded) {
      return null;
    }
  return (
    <View>
      <View style={styles.head}>
        <Text style={[styles.text,{fontFamily:fontFamily,fontSize:fontSize}]}>{headText}</Text>
        <ProfileButton/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    head:{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:45,
      marginHorizontal:15,
      marginBottom:35
    },
  })