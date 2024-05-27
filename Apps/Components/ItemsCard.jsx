import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import CustomFonts from "./CustomFonts";

export default function ItemsCard({ data }) {
  const date = new Date(data.date);

  // Extract the day, month, and year components
  const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${day}/${month}/${year}`;

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    
  const fontloaded = CustomFonts();
  if (!fontloaded) {
    return null;
  }
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
        resizeMode="contain"
          source={{uri:data.image}}
          style={styles.image}
        />
        <Text style={[styles.text, themeTextStyle]}>ITEM : {data.item}</Text>
        <Text style={[styles.text, themeTextStyle]}>
          DATE : {formattedDate}
        </Text>
        <Text style={[styles.text, themeTextStyle]} numberOfLines={null}>
          LOCATION: {data.location}
        </Text>
        <Text style={[styles.text, themeTextStyle]}>
          CONTACT : {data.contact}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255)", // Semi-transparent background color for glassmorphic effect
    width: "95%",
    borderRadius: 24,
    overflow: "hidden",
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 13,
    resizeMode: "stretch",
    marginBottom: 18,
  },
  text: {
    fontSize: 13,
    marginLeft: 8,
    fontFamily: "Poppins-SemiBold",
  },
  darkThemeText: {
    color: "white",
  },
});
