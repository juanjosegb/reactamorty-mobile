import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from "../components/Common/Header";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export const Routes = () =>
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'blue'},
        }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerTitle: props => <Header/>}}
        />
    </Stack.Navigator>