import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import StackEx from './StackEx';
import Ionic from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';
import Bagscreen from '../screens/Bagscreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();

const TabEx = () => {
    return (
        <Tab.Navigator style={{ height: 60 }} screenOptions={({ route }) => ({
            headerShown: false ,
            tabBarIcon: ({ focused, size, color }) => {
                let iconName; 
                if (route.name === 'StackEx') {
                    iconName = focused ? 'md-home' : 'md-home-outline'

                } else if (route.name === 'SearchScreen') {
                    iconName = focused ? 'ios-search-circle-sharp' : 'ios-search-outline'
                } else if (route.name === 'Bagscreen') {
                    iconName = focused ? 'basket-sharp' : 'basket-outline'
                } else if (route.name === 'FavoriteScreen') {
                    iconName = focused ? 'heart-sharp' : 'heart-outline'
                } else if (route.name === 'ProfileScreen') {
                    iconName = focused ? 'person' : 'person-outline'
                }
                return <Ionic name={iconName} size={size} color={color} />

            },

        })}
            tabBarOptions={{ showLabel: false }} >
            <Tab.Screen name={'StackEx'} component={StackEx} />
            <Tab.Screen name={'SearchScreen'} component={SearchScreen} />
            <Tab.Screen name={'Bagscreen'} component={Bagscreen} />
            <Tab.Screen name={'FavoriteScreen'} component={FavoriteScreen} />
            <Tab.Screen name={'ProfileScreen'} component={ProfileScreen} />
        </Tab.Navigator>
    )

}



export default TabEx