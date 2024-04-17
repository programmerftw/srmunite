import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import NewsCard from '../Components/NewsCard'
import Header from '../Components/Header'
import Colors from '../Utils/Colors'

const screenWidth = Dimensions.get('window').width;

export default function Home() {

  const data = [
    { id: '1', news: "This is a sample text. It might be long enough to exceed the word limit.", tag: "Sports" },
    { id: '2', news: "This is another sample text. It might be long enough to exceed the word limit.", tag: "News" },
    { id: '3', news: "This is yet another sample text. It might be long enough to exceed the word limit.", tag: "Technology" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <View>
      <NewsCard height={200} news={item.news} tag={item.tag} />
      {index !== activeIndex && <View style={styles.dot} />}
    </View>
  );

  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % data.length);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: (activeIndex + 1) % data.length,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  return (
    <View>
      <Header headText={'Unite'} fontFamily={'Rochester'} fontSize={28} />
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
            setActiveIndex(newIndex);
          }}
        />
        <View style={styles.pagination}>
          {data.map((item, index) => (
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
    backgroundColor: Colors.LGREY
  },
  activeDot: {
    width: 14,
    height: 6,
    borderRadius: 6,
    backgroundColor: Colors.LGREY
  },
})
