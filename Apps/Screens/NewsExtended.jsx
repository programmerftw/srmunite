import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomFonts from '../Components/CustomFonts';
import Colors from '../Utils/Colors';

export default function NewsExtended({ tag, date, heading, news }) {

    const fontloaded = CustomFonts()

    if (!fontloaded) {
        return null;
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="chevron-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Image style={styles.image} source={require("../../assets/images/LostandFoundItems/LostItem1.jpg")}></Image>
            <View style={styles.newsContainer}>
                <Text style={styles.heading}>IOC accuses Russia of 'politicisation of sport' with Friendship Games</Text>
                <View style={styles.flexConatiner}>
                    <Text style={styles.tag}>games</Text>
                    <Text style={styles.date}>Mar 20,2024</Text>
                </View>
                <Text style={styles.news}>The IOC, which has authorised the participation of Russian sportsmen and women in this year's Olympics in Paris only under a neutral banner and on condition that they did not support Russia's invasion of Ukraine, called on the sporting world and the governments invited by Moscow "to reject any participation in and support of" this event</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
    },
    icon: {
        width: '20%',
        padding: 8,
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
        borderRadius: 24,
        marginBottom: 30,
    },
    newsContainer: {
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        marginBottom: 20,
        textAlign: 'justify'
    },
    flexConatiner:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:30
    },
    tag:
    {
        textTransform:'uppercase',
        color:Colors.BLUE,
        fontFamily:"Poppins-SemiBold",
    },
    date:{
        // marginRight:10,
        color:Colors.GREY,
        fontFamily:"Poppins-Medium",
    },
    news:{
        fontFamily:'Poppins-SemiBold',
        color:Colors.GREY,
        fontSize:14,
        textAlign: 'justify'
        // backgroundColor:'red'
    }
})