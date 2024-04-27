import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import CustomFonts from './CustomFonts'
import { useNavigation } from '@react-navigation/native';

export default function ProfileButton({ initials }) {
    const navigation = useNavigation();

    const handleProfilePress = () => {
        navigation.navigate('profile'); // Navigate to profile screen
    };

    const fontloaded = CustomFonts();

    if (!fontloaded) {
        return null;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleProfilePress}>
            {/* <Text style={styles.text}>{initials}</Text> */}
            <Text style={styles.text}>R</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        backgroundColor: Colors.LGREY,
        borderRadius: 50,
        justifyContent: 'center',
    },
    text: {
        marginTop: 3,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    }
})