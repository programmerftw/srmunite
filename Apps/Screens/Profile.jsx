import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ProfilePhoto from "../Components/ProfilePhoto";
import CustomFonts from "../Components/CustomFonts";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../Components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://two-factor-auth-5geo.onrender.com";

export default function Profile({ name, email }) {
  const [jwtToken, setJwtToken] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getToken = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      return jwtToken;
    } catch (error) {
      console.error("Error getting token", error);
      return null;
    }
  };

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const iconColor = colorScheme === "light" ? "black" : "white";

  const navigation = useNavigation();
  const fontloaded = CustomFonts();

  // const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  // const toggleDarkMode = () => {
  //     setDarkModeEnabled(!darkModeEnabled);
  // };

  useEffect(() => {
    let isMounted = true;
    getToken().then((jwtToken) => {
      if (jwtToken) {
        setJwtToken(jwtToken);
        fetch(`${baseUrl}/api/user/getUser/`, {
          method: "GET", // Use 'GET' for fetching data
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "Network response was not ok " + response.statusText
              );
            }
            return response.json();
          })
          .then((data) => {
            if (isMounted) {
              console.log(data);
              setUserData(data);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
            setLoading(false);
          });
      } else {
        console.log("No token found.");
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!fontloaded) {
    return null;
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching data</Text>;
  }

  const goBack = () => {
    navigation.goBack();
  };

  const clearToken = async () => {
    try {
        await AsyncStorage.removeItem('jwtToken');
    } catch (error) {
        console.error('Error clearing token:', error);
    }
};

  return (
    <View style={[themeContainerStyle]}>
      {/* Back Button */}
      <TouchableOpacity style={styles.icon} onPress={goBack}>
        <Ionicons name="chevron-back-outline" size={28} color={iconColor} />
      </TouchableOpacity>
      {/* Profile Photo */}
      <ProfilePhoto />
      {/* Name */}
      <Text style={[styles.name, themeTextStyle]}>{userData.data.username}</Text>
      {/* Email */}
      <Text style={styles.email}>{userData.data.email}</Text>
      {/* Horizontal Lines */}
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
      </View>
      {/* To Change password */}
      <TouchableOpacity activeOpacity={0.4}>
        <Text style={[styles.text, themeTextStyle]}>Change Password</Text>
      </TouchableOpacity>
      {/* Horizontal Lines */}
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
      </View>
      <View style={styles.darkModeContainer}>
        {/* To enable darkmode */}
        <Text style={[styles.text, themeTextStyle]}>Dark Mode</Text>
        <TouchableOpacity>
          <FontAwesome
            name={colorScheme === "light" ? "toggle-off" : "toggle-on"}
            size={24}
            color={iconColor}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      {/* Horizontal Lines */}
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
      </View>
      {/*  Logout Button*/}
      <View style={styles.button}>
        <Buttons
          onPress={() => {
            console.log("logout");
            clearToken();
            navigation.navigate('login');
          }}
          text={"Log out"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    paddingTop: 35,
    height: "100%",
  },
  darkContainer: {
    paddingTop: 35,
    backgroundColor: Colors.BACKGROUND,
    height: "100%",
  },
  icon: {
    width: "20%",
    paddingVertical: 18,
    paddingHorizontal: 6,
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    textAlign: "center",
  },
  email: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    color: Colors.GREY,
    textAlign: "center",
    marginBottom: 50,
  },
  lineContainer: {
    alignItems: "center",
  },
  line: {
    borderWidth: 0.5,
    borderColor: Colors.LGREY,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 12,
    marginLeft: 25,
  },
  darkThemeText: {
    color: "white",
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    marginRight: 25,
  },
  button: {
    position: "absolute",
    bottom: 20, // Adjust this value as needed to fit your layout
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
