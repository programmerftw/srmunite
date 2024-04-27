import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import NewsCard from '../Components/NewsCard'
import Header from '../Components/Header'
import Colors from '../Utils/Colors'

const screenWidth = Dimensions.get('window').width;

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [NewsData, setNewsData] = useState([]);
  const renderItem = ({ item, index }) => (
    <View>
      <NewsCard height={200} news={item.news} tag={item.tags} />
    </View>
  );

  const flatListRef = useRef(null);

  useEffect(() => {
    fetch('http://192.168.1.111:3000/api/news')
      .then(response => response.json())
      .then((data) => {
        // Handle the data received from the server
        // console.log(data); // or set state, etc.
        setNewsData(data)
        console.log(NewsData)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    const interval = setInterval(() => {
      if (NewsData.length > 0) {
        setActiveIndex(prevIndex => (prevIndex + 1) % NewsData.length);
        flatListRef.current.scrollToIndex({
          animated: true,
          index: (activeIndex + 1) % NewsData.length,
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, NewsData.length]);

  return (
    <View>
      <Header headText={'Unite'} fontFamily={'Rochester'} fontSize={28} />
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={NewsData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
            setActiveIndex(newIndex);
          }}
        />
        <View style={styles.pagination}>
          {NewsData.map((_item, index) => (
            <View
              key={index}
              style={[styles.dot, index === activeIndex && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: Colors.LGREY,
  },
  activeDot: {
    width: 14,
    height: 6,
    borderRadius: 6,
    backgroundColor: Colors.LGREY
  },
})
