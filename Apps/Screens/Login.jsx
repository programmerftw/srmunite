import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import Ellipse from '../Components/Ellipse'
import Colors from '../Utils/Colors'
import Buttons from '../Components/Buttons'
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
    };
    // Function to clear text input fields
    const clearFields = () => {
        setEmail('');
        setPassword('');
    };

    const gotoSignup = () => {
        navigation.navigate('signup');
        clearFields();
    };
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                {/* Header */}
                <View>
                    <Ellipse text={"LOGIN"} />
                </View>
                {/* Email Input */}
                <View style={styles.email}>
                    <TextInput style={styles.box}
                        placeholder='E-mail'
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
                {/* Forget Password */}
                <TouchableOpacity style={styles.forgetpass}>
                    <Text style={styles.text}>Forget password?</Text>
                </TouchableOpacity>
                {/* Submit Button */}
                <View style={styles.passbutton}>
                    <Buttons text={'Log in'} onPress={handleSubmit}></Buttons>
                </View>
                <TouchableOpacity onPress={gotoSignup}>
                    <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    box: {
        padding: 14,
        borderColor: Colors.GREY,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        color: Colors.GREY,
        // ActivityIndicator: 'green'
    },
    email: {
        marginTop: width * 0.1,
        alignItems: 'center',
        marginBottom: 20,
    },
    pass: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 18
    },
    forgetpass: {
        marginBottom: 25,
    },
    text: {
        textAlign: 'center',
        color: Colors.GREY,
        fontWeight: '500'
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