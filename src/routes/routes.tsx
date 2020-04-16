import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "@Screens/HomeScreen";
import CharactersScreen from "@Screens/CharactersScreen";

const Drawer = createDrawerNavigator();

export const Routes = () =>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Characters" component={CharactersScreen}/>
    </Drawer.Navigator>