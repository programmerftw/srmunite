import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfilePhoto() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/images/Profile/Profile1.jpg')} style={styles.image}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        marginVertical: 30,
        height: 160,
        width: 160,
    }
})
