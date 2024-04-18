import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ProfilePhoto from '../Components/ProfilePhoto';
import CustomFonts from '../Components/CustomFonts';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Profile({ name, email }) {

    const navigation = useNavigation();
    const fontloaded = CustomFonts()
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        setDarkModeEnabled(!darkModeEnabled);
    };

    const goBack = () => {
        navigation.goBack()
    };

    if (!fontloaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={goBack}>
                <Ionicons name="chevron-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <ProfilePhoto />
            <Text style={styles.name}>Raushan Bhanu</Text>
            <Text style={styles.email}>11020210069@stu.srmuniversity.ac.in</Text>
            {/* Horizontal Lines */}
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <Text style={styles.text}>Change Password</Text>
            {/* Horizontal Lines */}
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <View style={styles.darkModeContainer} >
                <Text style={styles.text}>Dark Mode</Text>
                <TouchableOpacity onPress={toggleDarkMode}>
                    <FontAwesome name={darkModeEnabled ? "toggle-on" : "toggle-off"} size={24} color="black" style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
            {/* Horizontal Lines */}
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
    },
    icon: {
        width: '20%',
        padding: 8,
    },
    name: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        textAlign: 'center'
    },
    email: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        color: Colors.GREY,
        textAlign: 'center',
        marginBottom: 50
    },
    lineContainer: {
        alignItems: 'center',
    },
    line: {
        borderWidth: 0.5,
        borderColor: Colors.LGREY,
        width: '90%',
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        paddingVertical: 12,
        marginLeft: 25,
    },
    darkModeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconStyle: {
        marginRight: 25,
    },
})