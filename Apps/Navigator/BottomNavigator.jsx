import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../Screens/Home';
import News from '../Screens/News';
import LostAndFound from '../Screens/LostAndFound';
import NewsExtended from '../Screens/NewsExtended';
import Settings from '../Screens/Settings';
import Colors from '../Utils/Colors';
import Profile from '../Screens/Profile';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
var iconSize = 22;
const iconContainerSize = 56;

const HomeStack = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName='homestack'>
            {/* HomeScreen */}
            <Tab.Screen name="home" component={Home} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                        <LinearGradient
                            colors={focused ? ['#007DFF', '#004B99'] : [Colors.ACTIVE_TAB_COLOR, Colors.ACTIVE_TAB_COLOR]}
                            style={styles.gradient}
                            start={[0, 0]}
                            end={[1, 1.5]}
                        >
                            <Ionicons name="home" focused={focused} size={iconSize} color={focused ? Colors.ACTIVE_TAB_COLOR : Colors.INACTIVE_TAB_COLOR} />
                        </LinearGradient>
                    </View>
            }} />
            {/* Lost and Found Screen */}
            <Tab.Screen name="lostandfound" component={LostAndFound} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                        <LinearGradient
                            colors={focused ? [Colors.BLUE, Colors.DBLUE] : [Colors.ACTIVE_TAB_COLOR, Colors.ACTIVE_TAB_COLOR]}
                            style={styles.gradient}
                            start={[0, 0]}
                            end={[1, 1.5]}
                        >
                            <Ionicons name="newspaper" focused={focused} size={iconSize} color={focused ? Colors.ACTIVE_TAB_COLOR : Colors.INACTIVE_TAB_COLOR} />
                        </LinearGradient>
                    </View>
            }} />
            {/* News Screen */}
            <Tab.Screen name="news" component={News} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                        <LinearGradient
                            colors={focused ? ['#007DFF', '#004B99'] : [Colors.ACTIVE_TAB_COLOR, Colors.ACTIVE_TAB_COLOR]}
                            style={styles.gradient}
                            start={[0, 0]}
                            end={[1, 1.5]}
                        >
                            <Entypo name="briefcase" focused={focused} size={iconSize} color={focused ? Colors.ACTIVE_TAB_COLOR : Colors.INACTIVE_TAB_COLOR} />
                        </LinearGradient>
                    </View>
            }} />
            {/* Settings Screen */}
            {/* <Tab.Screen name="settings" component={Settings} options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <LinearGradient
                                colors={focused ? ['#007DFF', '#004B99'] : [Colors.ACTIVE_TAB_COLOR, Colors.ACTIVE_TAB_COLOR]}
                                style={styles.gradient}
                                start={[0, 0]}
                                end={[1, 1.5]}
                            >
                                <Ionicons name="settings" focused={focused} size={iconSize} color={focused ? Colors.ACTIVE_TAB_COLOR : Colors.INACTIVE_TAB_COLOR} />
                            </LinearGradient>
                        </View>
                }} /> */}
        </Tab.Navigator>

    );
};

export default function BottomNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="homestack" component={HomeStack} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="newsextended" component={NewsExtended} />
            </Stack.Navigator>
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
        elevation: 2,
        height: 80,
        background: "#D9D9D9",
        borderRadius: 50,
    }
}
const styles = StyleSheet.create({
    iconContainer: {
        width: iconContainerSize,
        height: iconContainerSize,
        borderRadius: iconContainerSize / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: iconContainerSize / 2,
    },
})