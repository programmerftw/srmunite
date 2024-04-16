import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { LinearGradient } from 'expo-linear-gradient';
import CustomFonts from './CustomFonts';

export default function Buttons({ onPress, text }) {
    const fontloaded = CustomFonts()
    if (!fontloaded){
        return null;
    }
    return (
        <View style={{width:'90%'}}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient colors={[Colors.BLUE, Colors.DBLUE]} style={styles.button} start={[0, 0]} end={[0.8,1]}>
                    <Text style={styles.buttonText}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Poppins-Medium",
    },
});