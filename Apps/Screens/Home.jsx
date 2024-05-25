import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  useColorScheme,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";
import Colors from "../Utils/Colors";
import { WebView } from "react-native-webview";
import CustomFonts from "../Components/CustomFonts";
import NewsCardSkeleton from "../Components/NewsCardSkeleton";

const screenWidth = Dimensions.get("window").width;
const postHeight = 750;

export default function Home() {
  const fontloaded = CustomFonts();
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [activeIndex, setActiveIndex] = useState(0);
  const [NewsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // rendering newscard
  // const renderItem = ({ item, index }) => (
  //   <View>
  //     {loading || error ? (
  //       <NewsCardSkeleton height={200} />
  //     ) : (
  //       <NewsCard height={200} news={item.news} tag={item.tags} id={item._id} />
  //     )}
  //   </View>
  // );

  const flatListRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    fetch("http://192.168.1.111:3000/api/news")
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

    const interval = setInterval(() => {
      if (NewsData.length > 0) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % NewsData.length);
        flatListRef.current.scrollToIndex({
          animated: true,
          index: (activeIndex + 1) % NewsData.length,
        });
      }
    }, 4000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [activeIndex, NewsData.length]);

  if (!fontloaded) {
    return null;
  }

  // rendering newscard
  const renderItem = ({ item, index }) => (
    <View>
      {loading || error ? (
        <NewsCardSkeleton height={200} />
      ) : (
        <NewsCard height={200} news={item.news} tag={item.tags} id={item._id} />
      )}
    </View>
  );

  return (
    <ScrollView style={[themeContainerStyle]}>
      <View style={{ marginTop: 2.571 }}>
        {/* Header */}
        <Header headText={"Unite"} fontFamily={"Rochester"} fontSize={28} />
      </View>
      <View style={styles.container}>
        {/* Moving card */}
        <FlatList
          ref={flatListRef}
          data={loading || error ? Array.from({ length: 3 }) : NewsData}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            loading || error ? index.toString() : item._id
          }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / screenWidth
            );
            setActiveIndex(newIndex);
          }}
        />
        {/* Pagination */}
        <View style={styles.pagination}>
          {(loading || error ? Array.from({ length: 3 }) : NewsData).map(
            (_item, index) => (
              <View
                key={index}
                style={[styles.dot, index === activeIndex && styles.activeDot]}
              />
            )
          )}
        </View>
        {/* I-Frame */}
        <Text style={[styles.postText, themeTextStyle]}>Post</Text>
        <View style={[styles.webViewContainer, { height: postHeight }]}>
          <WebView
            originWhitelist={["*"]}
            source={{
              uri: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7189941317911662592",
            }}
          />
        </View>
        <View style={styles.footer}>
          <Text style={[styles.footerText, themeTextStyle]}>
            Crafted with ❤️ in Sonipat, India
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
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
    backgroundColor: Colors.LGREY,
  },
  postText: {
    fontFamily: "Poppins-SemiBold",
    marginLeft: 18,
    marginBottom: 14,
    fontSize: 24,
  },
  darkThemeText: {
    color: "white",
  },
  webViewContainer: {
    width: "94%",
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 10,
  },
  footer: {
    marginBottom: 130,
  },
  footerText: {
    marginLeft: 18,
    paddingTop: 30,
    fontFamily: "Poppins-Medium",
  },
});
