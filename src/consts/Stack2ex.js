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
import TabEx from './TabEx';

const Stack2ex = () => {
    const Stack = createNativeStackNavigator();
    // const Tabss = createBottomTabNavigator();



    return (
        <Stack.Navigator HomeScreen='SignInScreen' screenOptions={{ headerShown: false }}>

            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='UserCreateScreen' component={UserCreateScreen} />
            



        </Stack.Navigator>
    );
};
export default Stack2ex;
