import { View, ScrollView, StyleSheet, useColorScheme } from "react-native";
import Header from "../Components/Header";
import React, { useState, useEffect } from "react";
import Colors from "../Utils/Colors";
import CustomFonts from "../Components/CustomFonts";
import NewsCard from "../Components/NewsCard";
import NewsCardSkeleton from "../Components/NewsCardSkeleton";

export default function News() {
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const fontloaded = CustomFonts();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    let isMounted = true;
    fetch("http://192.168.29.239:3000/api/news")
      .then((response) => response.json())
      .then((data) => {
        // Handle the data received from the server
        if (isMounted) {
          setNewsData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (loading || error) {
    return (
      <ScrollView style={[themeContainerStyle]}>
        <Header
          headText={"News"}
          fontFamily={"Poppins-SemiBold"}
          fontSize={26}
        />
        <View style={styles.newsContainer}>
          {[...Array(3)].map((_, index) => (
            <NewsCardSkeleton key={index} height={225} marginBottom={20} />
          ))}
        </View>
      </ScrollView>
    );
  }

  if (!fontloaded) {
    return null;
  }

  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Header */}
      <Header headText={"News"} fontFamily={"Poppins-SemiBold"} fontSize={26} />
      {/* News Container */}
      <View style={styles.newsContainer}>
        {newsData.map((item) => (
          <NewsCard
            key={item._id}
            height={225}
            news={item.news}
            tag={item.tags}
            id={item._id}
            marginBottom={20}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  newsContainer: {
    paddingBottom: 100,
  },
});
