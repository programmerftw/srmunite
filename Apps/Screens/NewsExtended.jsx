import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, useColorScheme } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomFonts from '../Components/CustomFonts';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function NewsExtended({ tag, date, heading, news }) {
    const [NewsData, setNewsData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        fetch('http://192.168.1.36:3000/api/news')
          .then(response => response.json())
          .then((data) => {
            // Handle the data received from the server
            // console.log(data); // or set state, etc.
            setNewsData(data)
            console.log(NewsData[0].news)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    
        
      }, [ NewsData.length]);
    

    const colorScheme = useColorScheme();
    const themeHeadingStyle = colorScheme === 'light' ? styles.lightHeadingText : styles.darkHeadingText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const iconColor = colorScheme === 'light' ? 'black' : 'white';

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack()
    };

    const fontloaded = CustomFonts()

    if (!fontloaded) {
        return null;
    }

    return (
        <ScrollView style={[themeContainerStyle]}>
            {/* Back Button */}
            <TouchableOpacity style={styles.icon} onPress={goBack}>
                <Ionicons name="chevron-back-outline" size={28} color={iconColor} />
            </TouchableOpacity>
            {/* News Image */}
            <Image style={styles.image} source={require("../../assets/images/LostandFoundItems/LostItem1.jpg")}></Image>
            <View style={styles.newsContainer}>
                {/* News Heading */}
                <Text style={[themeHeadingStyle, styles.heading]}>{NewsData[0].news}</Text>
                <View style={styles.flexConatiner}>
                    {/* News tag */}
                    <Text style={styles.tag}>{NewsData[0].tags}</Text>
                    {/* News Date */}
                    <Text style={[styles.date, themeTextStyle]}>Mar 20,2024</Text>
                </View>
                {/* Complete News */}
                <Text style={[styles.news, themeTextStyle]}>{NewsData[0].description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    lightContainer: {
        paddingTop: 30
    },
    darkContainer: {
        paddingTop: 30,
        backgroundColor: Colors.BACKGROUND
    },
    icon: {
        width: '20%',
        paddingVertical: 18,
        paddingHorizontal: 6,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
        borderRadius: 8,
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
    darkHeadingText: {
        color: 'white'
    },
    flexConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    tag:
    {
        textTransform: 'uppercase',
        color: Colors.BLUE,
        fontFamily: "Poppins-Medium",
    },
    date: {
        color: Colors.GREY,
        fontFamily: "Poppins-Medium",
    },
    news: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        textAlign: 'justify'
    },
    lightThemeText: {
        color: Colors.GREY,
    },
    darkThemeText: {
        color: Colors.LGREY
    }

})