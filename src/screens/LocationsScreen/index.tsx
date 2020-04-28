import React from 'react';
import {Container, Content, Icon, Text} from "native-base";
import {CustomHeader} from "@Components/Common/Header";

export type Props = { navigation: any }

const LocationsScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <Container>
            <CustomHeader title={"Locations"} navigation={navigation}>
                <Icon style={{fontSize: 30}} name="menu" onPress={() => navigation.openDrawer()}/>
            </CustomHeader>
            <Content padder>
                <Text>
                    Locations
                </Text>
            </Content>
        </Container>
    );
}

export default LocationsScreen;
