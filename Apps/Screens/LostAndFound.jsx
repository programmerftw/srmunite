import {
  View,
  StyleSheet,
  useColorScheme,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import ItemsCard from "../Components/ItemsCard";
import Colors from "../Utils/Colors";
import CustomFonts from "../Components/CustomFonts";
import ItemCardSkeleton from "../Components/ItemCardSkeleton";

export default function LostAndFound() {
  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fontloaded = CustomFonts();
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  useEffect(() => {
    let isMounted = true;
    fetch(`http://192.168.1.111:3000/api/lostandfound`)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setLostAndFoundData(data);
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

  if (loading || error) {
    return (
      <ScrollView style={[themeContainerStyle]}>
        <Header
          headText={"News"}
          fontFamily={"Poppins-SemiBold"}
          fontSize={26}
        />
        <View style={styles.itemContainer}>
          {[...Array(3)].map((_, index) => (
            <ItemCardSkeleton key={index} height={225} marginBottom={20} />
          ))}
        </View>
      </ScrollView>
    );
  }


  if (!fontloaded) {
    return null;
  }

  return (
    <View style={[themeContainerStyle, { flex: 1 }]}>
      <FlatList
        data={lostAndFoundData}
        renderItem={({ item }) => <ItemsCard data={item} />}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <Header
            headText={"Lost And Found"}
            fontFamily={"Poppins-SemiBold"}
            fontSize={26}
          />
        }
        contentContainerStyle={styles.itemContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND,
    height: "100%",
  },
  itemContainer: {
    paddingBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkThemeText: {
    color: "white",
  },
});
