import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import Colors from "../Utils/Colors";
import { Octicons, Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import CustomFonts  from "../Components/CustomFonts";

const iconSize = 24;
export default function Settings() {
  const openWebsite = async () => {
    try {
      await WebBrowser.openBrowserAsync("https://www.cllgnotes.com/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const iconColor = colorScheme === "light" ? "black" : "white";

  const fontloaded = CustomFonts();
  if (!fontloaded) {
    return null;
  }

  return (
    <ScrollView style={[themeContainerStyle]}>
      {/* Header */}
      <Header
        headText={"Settings"}
        fontFamily={"Poppins-SemiBold"}
        fontSize={26}
      />
      {/* Horizontal Lines */}
      <View
        style={[
          styles.lineContainer,
          { marginTop: 5, opacity: colorScheme === "dark" ? 0.1 : 1 },
        ]}
      >
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.item}
        onPress={openWebsite}
      >
        <View style={styles.leftContainer}>
          <Octicons name="note" size={iconSize} color={iconColor} />
          <Text style={[styles.text, themeTextStyle]}>NOTES</Text>
        </View>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={iconColor}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </TouchableOpacity>
      {/* Horizontal Lines */}
      <View
        style={[
          styles.lineContainer,
          { opacity: colorScheme === "dark" ? 0.1 : 1 },
        ]}
      >
        <View style={styles.line}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  lineContainer: {
    alignItems: "center",
  },
  line: {
    borderWidth: 0.5,
    borderColor: Colors.LGREY,
    width: "94%",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 14,
    marginLeft: 20,
  },
  icon: {
    width: "20%",
  },
  darkThemeText: {
    color: "white",
  },
  item: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
