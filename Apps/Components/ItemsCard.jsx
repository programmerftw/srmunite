import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import CustomFonts from './CustomFonts'

export default function ItemsCard({ path, location, date }) {

  const fontloaded = CustomFonts()

  if (!fontloaded) {
    return null;
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image source={require('../../assets/images/LostandFoundItems/LostItem1.jpg')} style={styles.image} />
        <Text style={styles.text}>DATE : 18/04/24</Text>
        <Text style={styles.text} numberOfLines={null}>LOCATION : 5TH FLOOR, LAB-4</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background color for glassmorphic effect
    width: '95%',
    borderRadius: 24,
    overflow: 'hidden',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 13,
    resizeMode: 'stretch',
    marginBottom: 18
  },
  text: {
    fontSize:12,
    marginLeft: 10,
    // textAlign: 'center',
    fontFamily: "Poppins-SemiBold",
  }
})