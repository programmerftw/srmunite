import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import LoginGradient from "../Components/LoginGradient";
import Colors from "../Utils/Colors";
import Buttons from "../Components/Buttons";
import { MaterialIcons } from "@expo/vector-icons";
import CustomFonts from "../Components/CustomFonts";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const base_url = "https://two-factor-auth-5geo.onrender.com";

export default function Login() {
  const navigation = useNavigation();
  const fontLoaded = CustomFonts();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("jwtToken");
        if (token) {
          navigation.navigate("customnav");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const saveUsername = async (username) => {
    try {
      await AsyncStorage.setItem("username", username);
    } catch (error) {
      console.error("Error saving username:", error);
    }
  };

  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem("jwtToken", token);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const handleSubmit = () => {
    setLoading(true); // Set loading to true when submitting
    fetch(base_url + "/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Set loading to false after response is received
        if (data.status === true) {
          navigation.navigate("customnav");
          saveUsername(email);
          saveToken(data.token);
        }
      })
      .catch((error) => {
        setLoading(false); // Set loading to false if there's an error
        console.error("Error:", error);
      });
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const gotoSignup = () => {
    navigation.navigate("signup");
    clearFields();
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        style={[themeContainerStyle]}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <LoginGradient />
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.box}
            placeholder="E-mail"
            placeholderTextColor={Colors.GREY}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.pass}>
          <TextInput
            style={styles.box}
            placeholder="Password"
            placeholderTextColor={Colors.GREY}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={toggleShowPassword}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={22}
              color={Colors.GREY}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgetpass}>
          <Text style={styles.text}>Forget password?</Text>
        </TouchableOpacity>
        <View style={styles.passbutton}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.BLUE} />
          ) : (
            <Buttons text={"Log in"} onPress={handleSubmit}></Buttons>
          )}
        </View>
        <TouchableOpacity onPress={gotoSignup}>
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  box: {
    padding: 14,
    borderColor: Colors.GREY,
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    color: Colors.GREY,
    fontFamily: "Poppins-Regular",
  },
  email: {
    marginTop: width * 0.1,
    alignItems: "center",
    marginBottom: 20,
  },
  pass: {
    position: "relative",
    alignItems: "center",
    marginBottom: 18,
  },
  forgetpass: {
    marginBottom: 25,
  },
  text: {
    textAlign: "center",
    color: Colors.GREY,
    fontFamily: "Poppins-Medium",
  },
  eyeButton: {
    position: "absolute",
    right: width * 0.1,
    top: "50%",
    transform: [{ translateY: -11 }],
  },
  passbutton: {
    marginBottom: 25,
    alignItems: "center",
  },
});
