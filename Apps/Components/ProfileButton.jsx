import {
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import CustomFonts from "./CustomFonts";
import { useNavigation } from "@react-navigation/native";

export default function ProfileButton({ data }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("profile"); // Navigate to profile screen
  };

  const fontloaded = CustomFonts();

  if (!fontloaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={[themeContainerStyle, styles.container]}
      onPress={handleProfilePress}
    >
      <Text style={[styles.text, themeTextStyle]}>
        {String(data[0]).toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: Colors.LGREY,
  },
  darkContainer: {
    backgroundColor: Colors.DMNAV,
  },
  text: {
    marginTop: 3,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  darkThemeText: {
    color: "white",
  },
});
