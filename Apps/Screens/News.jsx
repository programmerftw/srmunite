import { View, Text } from 'react-native'
import React from 'react'
import HomeCard from '../Components/HomeCard'
import Header from '../Components/Header'

export default function News() {
  return (
    <View>
      <Header headText={'News'} fontFamily={'Poppins-Medium'} fontSize={26}/>
      <HomeCard height={250} />
    </View>
  )
}