import { View, StyleSheet, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import ItemsCard from '../Components/ItemsCard'
import Colors from '../Utils/Colors';

export default function LostAndFound() {

  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Header */}
      <Header headText={'Lost And Found'} fontFamily={'Poppins-SemiBold'} fontSize={26} />
      {/* Item Cards */}
      <View style={styles.itemContainer}>
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND
  },
  itemContainer: {
    paddingBottom: 100,
  }
})