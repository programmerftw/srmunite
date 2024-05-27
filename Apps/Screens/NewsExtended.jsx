import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomFonts from "../Components/CustomFonts";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function NewsExtended() {
  const [NewsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const route = useRoute();
  const id = route.params.id;

  const colorScheme = useColorScheme();
  const themeHeadingStyle =
    colorScheme === "light" ? styles.lightHeadingText : styles.darkHeadingText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const iconColor = colorScheme === "light" ? "black" : "white";
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const fontloaded = CustomFonts();

  useEffect(() => {
    let isMounted = true;
    console.log(id);
    fetch(`http://192.168.29.239:3000/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          console.log(data);
          data.date = data.date.slice(0, 10);
          setNewsData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!fontloaded) {
    return null;
  }

  if (loading || error) {
    return (
      <View style={[styles.loadingContainer, themeContainerStyle]}>
        <ActivityIndicator size="large" color={Colors.BLUE} />
      </View>
    );
  }

  // if (error) {
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={[themeContainerStyle,themeTextStyle]}>Error fetching data</Text>
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Back Button */}
      <TouchableOpacity style={styles.icon} onPress={goBack}>
        <Ionicons name="chevron-back-outline" size={28} color={iconColor} />
      </TouchableOpacity>
      {/* News Image */}
      <Image
        style={styles.image}
        source={{uri: NewsData.image}}
      />
      <View style={styles.newsContainer}>
        {/* News Heading */}
        <Text style={[themeHeadingStyle, styles.heading]}>{NewsData.news}</Text>
        <View style={styles.flexConatiner}>
          {/* News tag */}
          <Text style={styles.tag}>{NewsData.tags}</Text>
          {/* News Date */}
          <Text style={[styles.date, themeTextStyle]}>{NewsData.date}</Text>
        </View>
        {/* Complete News */}
        <Text style={[styles.news, themeTextStyle]}>
          {NewsData.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    paddingTop: 30,
  },
  darkContainer: {
    paddingTop: 30,
    backgroundColor: Colors.BACKGROUND,
  },
  icon: {
    width: "20%",
    paddingVertical: 18,
    paddingHorizontal: 6,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    borderRadius: 8,
    marginBottom: 30,
  },
  newsContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
    textAlign: "justify",
  },
  darkHeadingText: {
    color: "white",
  },
  flexConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  tag: {
    textTransform: "uppercase",
    color: Colors.BLUE,
    fontFamily: "Poppins-Medium",
  },
  date: {
    color: Colors.GREY,
    fontFamily: "Poppins-Medium",
  },
  news: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "justify",
  },
  lightThemeText: {
    color: Colors.GREY,
  },
  darkThemeText: {
    color: Colors.LGREY,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
