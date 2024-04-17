import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import CustomFonts from './CustomFonts'

export default function ItemsCard({ path, location }) {

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = currentDate.getFullYear();

  // Format day, month, and year to have leading zeros if needed
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  // Combine day, month, and year in the desired format
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  const fontloaded = CustomFonts()

  if (!fontloaded) {
    return null;
  }
  const testPath = '../../assets/images/LostItem1.jpg'
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image source={require('../../assets/images/LostItem1.jpg')} style={styles.image} />
        <Text style={styles.text}>DATE : {formattedDate}</Text>
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
    height: 210,
    borderRadius: 13,
    resizeMode: 'stretch',
    marginBottom: 15
  },
  text: {
    marginLeft: 10,
    // textAlign: 'center',
    fontFamily: "Poppins-SemiBold",
  }
})