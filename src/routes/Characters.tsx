import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CharactersScreen from "@Screens/Characters/CharactersScreen";
import DetailScreen from "@Screens/Characters/DetailScreen";

const CharactersNavigator = createStackNavigator();

export const Characters = () =>
    <CharactersNavigator.Navigator headerMode={"none"} initialRouteName={"Characters"}>
        <CharactersNavigator.Screen name="Characters" component={CharactersScreen}/>
        <CharactersNavigator.Screen name="DetailCharacter" component={DetailScreen}/>
    </CharactersNavigator.Navigator>