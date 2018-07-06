/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Profile from "./Profile";
import HomeScreen from "./HomeScreen";


const instructions = Platform.select({
  ios: 'Please select an option to continue:',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const AppStackNavigator = StackNavigator(
    {
        Home: { screen: HomeScreen },
        //Chat: { screen: MainScreenNavigator },
        Profile: { screen: Profile },
        initialRouteName: 'Home',
    },
);
//type Props = {};
export default class HomeNavigator extends React.Component {
    render() {
        return (
            <AppStackNavigator/>
        );
    }
}

