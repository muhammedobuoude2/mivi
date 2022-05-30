import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogeMavi from '../screens/LogeMavi';
import OnBoardScreen from '../screens/OnBoardScreen';
import OnBoardScreen2 from '../screens/OnBoardScreen2';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { UserCreateScreen } from '../screens/loging/UserCreateScreen';
import { SignInScreen } from '../screens/loging/SignInScreen';
import Stack2ex from './Stack2ex'
import TabEx from './TabEx';

const StackEx = () => {
    const Stack = createNativeStackNavigator();
    // const Tabss = createBottomTabNavigator();




    return (
        <Stack.Navigator HomeScreen='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />

        </Stack.Navigator>
    );
};
export default StackEx;
