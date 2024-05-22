import { View, StyleSheet, ScrollView, useColorScheme,ActivityIndicator,FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import ItemsCard from '../Components/ItemsCard'
import Colors from '../Utils/Colors';
import CustomFonts from '../Components/CustomFonts';

export default function LostAndFound() {
  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    
    useEffect(() => {
      let isMounted = true; 
      fetch(`http://192.168.29.239:3000/api/lostandfound`)
          .then(response => response.json())
          .then((data) => {
              if (isMounted) {
                  // console.log(data)
                  setLostAndFoundData(data);
                  setLoading(false);
              }
          })
          .catch(error => {
              setError(error);
              setLoading(false);
          });

      return () => {
          isMounted = false;
      };
  }, []);


  if (loading) {
      return <ActivityIndicator />;
  }

  if (error) {
      return <Text>Error fetching data</Text>;
  }
  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Header */}
      <Header headText={'Lost And Found'} fontFamily={'Poppins-SemiBold'} fontSize={26} />
      {/* Item Cards */}
      <View style={styles.itemContainer}>
      <FlatList
            data={lostAndFoundData}
            renderItem={({ item }) => <ItemsCard data={item} />}
            keyExtractor={item => item._id}
        />
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