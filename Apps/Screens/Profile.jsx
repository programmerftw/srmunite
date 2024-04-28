import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ProfilePhoto from '../Components/ProfilePhoto';
import CustomFonts from '../Components/CustomFonts';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Buttons from '../Components/Buttons';

export default function Profile({ name, email }) {

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const iconColor = colorScheme === 'light' ? 'black' : 'white';

    const navigation = useNavigation();
    const fontloaded = CustomFonts()

    // const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    // const toggleDarkMode = () => {
    //     setDarkModeEnabled(!darkModeEnabled);
    // };

    const goBack = () => {
        navigation.goBack()
    };

    if (!fontloaded) {
        return null;
    }

    return (
        <View style={[themeContainerStyle]}>
            {/* Back Button */}
            <TouchableOpacity style={styles.icon} onPress={goBack}>
                <Ionicons name="chevron-back-outline" size={28} color={iconColor} />
            </TouchableOpacity>
            {/* Profile Photo */}
            <ProfilePhoto />
            {/* Name */}
            <Text style={[styles.name, themeTextStyle]}>Raushan Bhanu</Text>
            {/* Email */}
            <Text style={styles.email}>11020210069@stu.srmuniversity.ac.in</Text>
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
            <View style={styles.darkModeContainer} >
                {/* To enable darkmode */}
                <Text style={[styles.text, themeTextStyle]}>Dark Mode</Text>
                <TouchableOpacity>
                    <FontAwesome name={colorScheme === 'light' ? "toggle-off" : "toggle-on"} size={24} color={iconColor} style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
            {/* Horizontal Lines */}
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            {/*  Logout Button*/}
            <View style={styles.button}>
                <Buttons onPress={() => { console.log('logout') }} text={'Log out'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lightContainer: {
        paddingTop: 35,
        height: '100%'
    },
    darkContainer: {
        paddingTop: 35,
        backgroundColor: Colors.BACKGROUND,
        height: '100%'
    },
    icon: {
        width: '20%',
        paddingVertical: 18,
        paddingHorizontal: 6,
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
    darkThemeText: {
        color: 'white'
    },
    darkModeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconStyle: {
        marginRight: 25,
    },
    button: {
        position: 'absolute',
        bottom: 20, // Adjust this value as needed to fit your layout
        left: 0,
        right: 0,
        alignItems: 'center',
    }
})