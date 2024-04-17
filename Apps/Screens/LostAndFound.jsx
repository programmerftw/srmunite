import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import ItemsCard from '../Components/ItemsCard'

export default function LostAndFound() {
  return (
    <ScrollView>
      <Header headText={'LostAndFound'} fontFamily={'Poppins-Medium'} fontSize={26} />
      <View style={styles.itemContainer}>
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingBottom: 100,
  }
})