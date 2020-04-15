import React from 'react';
import {Text, View} from "react-native";

export type Props = { navigation: any }

const HomeScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home screen</Text>
        </View>
    );
}

export default HomeScreen;
