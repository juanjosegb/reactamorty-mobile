import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from "@Screens/HomeScreen";
import CharactersScreen from "@Screens/Characters/CharactersScreen";
import Logo from "@Assets/logo.jpg";
import {Icon} from "native-base";
import LocationsScreen from "@Screens/LocationsScreen";
import EpisodesScreen from "@Screens/EpisodesScreen";
import ComparerScreen from "@Screens/ComparerScreen";
import CustomDivider from "@Custom/Divider";
import DrawerImage from "@Custom/DrawerImage";

const Drawer = createDrawerNavigator();

const DrawerContent = (children: any) => (
    <>
        <DrawerImage source={Logo}/>
        <CustomDivider/>
        <DrawerItemList {...children} />
    </>
)

export const Routes = () =>
    <Drawer.Navigator drawerContentOptions={{activeTintColor: '#38B1C8'}} initialRouteName="Home"
                      drawerContent={children => <DrawerContent {...children} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
            drawerIcon: config => <Icon style={{color: "rgba(0, 0, 0, 0.54)"}} type={"MaterialCommunityIcons"} name="home"/>
        }}/>
        <Drawer.Screen name="Characters" component={CharactersScreen} options={{
            drawerIcon: config => <Icon style={{color: "rgba(0, 0, 0, 0.54)"}} type={"MaterialCommunityIcons"} name="account-multiple"/>
        }}/>
        <Drawer.Screen name="Locations" component={LocationsScreen} options={{
            drawerIcon: config => <Icon style={{color: "rgba(0, 0, 0, 0.54)"}} type={"MaterialCommunityIcons"} name="compass"/>
        }}/>
        <Drawer.Screen name="Episodes" component={EpisodesScreen} options={{
            drawerIcon: config => <Icon style={{color: "rgba(0, 0, 0, 0.54)"}} type={"MaterialCommunityIcons"} name="movie"/>
        }}/>
        <Drawer.Screen name="Comparer" component={ComparerScreen} options={{
            drawerIcon: config => <Icon style={{color: "rgba(0, 0, 0, 0.54)"}} type={"MaterialCommunityIcons"} name="compare"/>
        }}/>
    </Drawer.Navigator>