import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import SignUpGradient from '../Components/SignUpGradient'
import Colors from '../Utils/Colors'
import Buttons from '../Components/Buttons'
import { MaterialIcons } from '@expo/vector-icons';
import CustomFonts from '../Components/CustomFonts'

const { width } = Dimensions.get('window');

const base_url = "https://two-factor-auth-5geo.onrender.com";

export default function Signup({ navigation }) {

    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Username', username);
        console.log('Email:', email);
        console.log('Password:', password);
        fetch(base_url + "/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Corrected "Contect-type" to "Content-Type"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                password_confirmation: password,
                gender: 'male',
                dob: Date.now(),
                createdAt: Date.now(),
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
        //navigation.navigate('otp');
    };
    const gotoLogin = () => {
        navigation.navigate('login');
    };

    // Loading Fonts
    const fontloaded = CustomFonts()

    if (!fontloaded) {
        return null;
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView style={[themeContainerStyle]} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                {/* Header */}
                <View>
                    <SignUpGradient />
                </View>
                {/* Username Input */}
                <View style={styles.user}>
                    <TextInput style={styles.box}
                        value={username}
                        placeholder='Username'
                        placeholderTextColor={Colors.GREY}
                        onChangeText={handleUsernameChange}
                    />
                </View>
                {/* Email Input */}
                <View style={styles.email}>
                    <TextInput style={styles.box}
                        placeholder='E-mail'
                        placeholderTextColor={Colors.GREY}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                {/* Password Input */}
                <View style={styles.pass}>
                    <TextInput
                        style={styles.box}
                        placeholder='Password'
                        placeholderTextColor={Colors.GREY}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                    {/* Password toggle icon */}
                    <TouchableOpacity style={styles.eyeButton} onPress={toggleShowPassword}>
                        <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={22} color={Colors.GREY} />
                    </TouchableOpacity>
                </View>
                {/* Submit Button */}
                <View style={styles.passbutton}>
                    <Buttons text={'Sign up'} onPress={handleSubmit}></Buttons>
                </View>
                {/* Login */}
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: Colors.BACKGROUND
    },
    box: {
        padding: 14,
        borderColor: Colors.GREY,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        color: Colors.GREY,
        fontFamily: 'Poppins-Regular',
        // ActivityIndicator: 'green'
    },
    user: {
        marginTop: width * 0.1,
        alignItems: 'center',
        marginBottom: 20

    },
    email: {
        alignItems: 'center',
        marginBottom: 20,
    },
    pass: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 30
    },

    text: {
        textAlign: 'center',
        color: Colors.GREY,
        fontFamily: 'Poppins-Medium'
    },
    eyeButton: {
        position: 'absolute',
        right: width * 0.10,
        top: '50%',
        transform: [{ translateY: -11 }],
    },
    passbutton: {
        marginBottom: 25,
        alignItems: 'center'
    }
}
)