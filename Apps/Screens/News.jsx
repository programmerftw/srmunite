import { View, Text, ScrollView, StyleSheet } from 'react-native'
import NewsCard from '../Components/NewsCard'
import Header from '../Components/Header'
import React, { useState, useEffect } from 'react';

export default function News() {

  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // Function to fetch data

    fetch('http://192.168.1.111:3000/api/news')
      .then(response => response.json())
      .then(data => {
        // Handle the data received from the server
        console.log(data); // or set state, etc.
        setNewsData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <ScrollView>
      {/* Header */}
      <Header headText={'News'} fontFamily={'Poppins-SemiBold'} fontSize={26} routeName={'News'} />
      {/* News Container */}
      <View style={styles.newsContainer}>
        {newsData.map(item => (
          <NewsCard key={item._id} height={245} news={item.news} tag={item.tags} marginBottom={20} />
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