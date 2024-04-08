import React from 'react'
import Home from '../Screens/Home';
import LostandFound from '../Screens/LostAndFound';
import News from '../Screens/News';
import Settings from '../Screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
var size = 22;

export default function BottomNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions} initialRouteName='Home'>
                <Tab.Screen name="home" component={Home} />
                <Tab.Screen name="profile" component={LostandFound} />
                <Tab.Screen name="news" component={News} />
                <Tab.Screen name="settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        right: 10,
        left: 10,
        elevation: 0,
        height: 80,
        background: "#D9D9D9",
        borderRadius: 50
    }
}