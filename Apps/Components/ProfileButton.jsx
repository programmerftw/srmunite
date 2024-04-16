import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import CustomFonts from './CustomFonts'

export default function ProfileButton({ initials }) {
    const fontloaded = CustomFonts();
    if (!fontloaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>{initials}</Text> */}
            <Text style={styles.text}>R</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        backgroundColor: Colors.LGREY,
        borderRadius: 50,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    }
})