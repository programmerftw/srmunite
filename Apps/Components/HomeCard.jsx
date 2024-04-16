import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomFonts from './CustomFonts';

export default function HomeCard() {
    const text = "This is a sample text. It might be long enough to exceed the word limit.";
    
    // Loading Fonts
    const fontloaded = CustomFonts();
    if (!fontloaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                colors={['#007DFF', '#372CE6']}
                start={[0, 0.5]}
                end={[0.5, 1]}
            >
                <Text style={styles.tagtext}>Sports</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={styles.newstext} numberOfLines={3} ellipsizeMode="tail">{text}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        width: '95%',
        height: 210,
        borderRadius: 24,
    },
    newstext: {
        color: 'white',
        fontWeight: '300',
        marginHorizontal: 30,
        marginBottom: 25,
        fontSize: 18,
        fontFamily: "Poppins-Black"
    },
    tagtext: {
        color: 'white',
        marginTop: 25,
        marginLeft: 30,
        fontFamily: 'Poppins-SemiBold'
    }
})