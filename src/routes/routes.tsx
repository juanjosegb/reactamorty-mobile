import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from "@Screens/HomeScreen";
import CharactersScreen from "@Screens/CharactersScreen";
import {Image, View} from "react-native";
import Logo from "@Assets/logo.jpg";
import {Icon} from "native-base";
import LocationsScreen from "@Screens/LocationsScreen";
import EpisodesScreen from "@Screens/EpisodesScreen";
import ComparerScreen from "@Screens/ComparerScreen";

const Drawer = createDrawerNavigator();

const DrawerContent = (children: any) => (
    <>
        <View>
            <Image
                style={{
                    backgroundColor: 'rgb(53, 173, 30)',
                    height: 120,
                    width: 280,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                source={Logo}
            />
        </View>
        <View
            style={{
                margin: 10,
                borderBottomColor: '(0, 0, 0, 0.54)',
                borderBottomWidth: 1,
            }}
        />
        <DrawerItemList {...children} />
    </>
)

export const Routes = () =>
    <Drawer.Navigator initialRouteName="Home" drawerContent={children => <DrawerContent {...children} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
            drawerIcon: config => <Icon type={"MaterialCommunityIcons"} name="home"/>
        }}/>
        <Drawer.Screen name="Characters" component={CharactersScreen} options={{
            drawerIcon: config => <Icon type={"MaterialCommunityIcons"} name="account-multiple"/>
        }}/>
        <Drawer.Screen name="Locations" component={LocationsScreen} options={{
            drawerIcon: config => <Icon type={"MaterialCommunityIcons"} name="compass"/>
        }}/>
        <Drawer.Screen name="Episodes" component={EpisodesScreen} options={{
            drawerIcon: config => <Icon type={"MaterialCommunityIcons"} name="movie"/>
        }}/>
        <Drawer.Screen name="Comparer" component={ComparerScreen} options={{
            drawerIcon: config => <Icon type={"MaterialCommunityIcons"} name="compare"/>
        }}/>
    </Drawer.Navigator>