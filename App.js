/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import OnBoardScreen from './src/screens/OnBoardScreen';
import HomeScreen from './src/screens/HomeScreen';
import OnBoardScreen2 from './src/screens/OnBoardScreen2'
import LogeMavi from './src/screens/LogeMavi'
import COLORS from './src/consts/colors';
import StackEx from './src/consts/StackEx';
import TabEx from './src/consts/TabEx'
import ForgotPasswordScreen from './src/screens/loging/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/loging/ResetPasswordScreen';
import FillInfoScreen from './src/screens/loging/FillInfoScreen';
import BookingScreen from './src/screens/booking/BookingScreen';
import SignInScreen from './src/screens/loging/SignInScreen';
import UserCreateScreen from './src/screens/loging/UserCreateScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import ShalihScreen from './src/screens/ShalihScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ChaletPageScreen from './src/screens/ChaletPageScreen';
import EditProfileScreen from './src/screens/EditProfileScreen'
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LogeMavi' component={LogeMavi} />
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
        <Stack.Screen name='OnBoardScreen2' component={OnBoardScreen2} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='UserCreateScreen' component={UserCreateScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} />
        <Stack.Screen name='FillInfoScreen' component={FillInfoScreen} />
        <Stack.Screen name='BookingScreen' component={BookingScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='ChaletPageScreen' component={ChaletPageScreen} />
        <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />
        <Stack.Screen name='TabEx' component={TabEx} />

      </Stack.Navigator>

    </NavigationContainer>


  );
};

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBarComponent {...props} />}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'DetailsScreen'} component={DetailsScreen} />

    </Tab.Navigator>
  )
}


function TabBarComponent({ state, descriptors, navigation }) {

  const focusedOption = descriptors[state.routes[state.index].key].options;

  if (focusedOption.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.constainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Image style={[styles.img, { backgroundColor: isFocused ? '#673ab7' : 'blue' }]} source={require('./src/assets/menuIcon.png')} />
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    height: 80
  },
  img: {
    tintColor: 'blue',
    width: 20,
    height: 20,
  }
})




export default App;
