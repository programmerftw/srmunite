import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeCard from '../Components/HomeCard'
import Header from '../Components/Header'

export default function Home() {
  return (
    <View style={styles.home}>
      <Header headText={'Unite'} fontFamily={'Rochester'} fontSize={28} />
      <HomeCard height={210} />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    height:'100%',
  }
})