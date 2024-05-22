import { View, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import NewsCard from '../Components/NewsCard'
import Header from '../Components/Header'
import React, { useState, useEffect } from 'react';
import Colors from '../Utils/Colors';

export default function News() {

  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // Function to fetch data

    fetch('http://192.168.29.239:3000/api/news')
      .then(response => response.json())
      .then(data => {
        // Handle the data received from the server
        console.log(data);
        setNewsData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Header */}
      <Header headText={'News'} fontFamily={'Poppins-SemiBold'} fontSize={26} />
      {/* News Container */}
      <View style={styles.newsContainer}>
        {newsData.map(item => (
          <NewsCard key={item._id} height={225} news={item.news} tag={item.tags} id={item._id} marginBottom={20} />
        ))}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND
  },
  newsContainer: {
    paddingBottom: 100,
  }
})