import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import NewsCard from '../Components/NewsCard'
import Header from '../Components/Header'

export default function News() {
  const data = [
    { id: '1', news: "This is a sample text. It might be long enough to exceed the word limit.", tag: "Sports" },
    { id: '2', news: "This is another sample text. It might be long enough to exceed the word limit.", tag: "News" },
    { id: '3', news: "This is yet another sample text. It might be long enough to exceed the word limit.", tag: "Technology" },
  ];

  return (
    <ScrollView style={styles.newsContainer}>
      <Header headText={'News'} fontFamily={'Poppins-Medium'} fontSize={26} />
      <View style={styles.newsContainer}>
        {data.map(item => (
          <NewsCard key={item.id} height={245} news={item.news} tag={item.tag} marginBottom={20} />
        ))}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  newsContainer: {
    paddingBottom: 100,
  }
})